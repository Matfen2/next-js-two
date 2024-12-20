import mongoose from "mongoose";

const connectionToDatabase = async () => {
  const MONGODB_URI = process.env.MongoURL;

  if (!MONGODB_URI) {
    throw new Error("MongoURL non défini dans le fichier .env");
  }

  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("MongoDB déjà connecté.");
      return;
    }
    await mongoose.connect(MONGODB_URI);
    console.log("Connexion réussie à MongoDB !");
  } catch (err) {
    console.error("Erreur de connexion à MongoDB :", err);
    throw err;
  }
};

export default connectionToDatabase;
