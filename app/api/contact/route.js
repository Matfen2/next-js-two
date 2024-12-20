import connectionToDatabase from "@/lib/mongoose";
import Contact from "@/models/Contact";

export async function POST(req) {
  try {
    const { username, email, message } = await req.json();

    // Validation des champs
    if (!username || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Tous les champs sont requis." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Connexion à MongoDB
    await connectionToDatabase();

    // Enregistrement dans la base de données
    const contact = new Contact({ username, email, message });
    await contact.save();

    return new Response(
      JSON.stringify({
        message: "Message envoyé avec succès.",
        user: { id: contact._id, email: contact.email },
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Erreur serveur :", error);
    return new Response(
      JSON.stringify({ message: "Erreur interne du serveur." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
