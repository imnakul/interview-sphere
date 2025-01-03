const envimports = {
   appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
   appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
   appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
   appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
   appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
   // appwriteCollectionId: String(process.env.REACT_APP_APPWRITE_COLLECTION_ID),
   // appwriteCollectionId2: String(process.env.REACT_APP_APPWRITE_COLLECTION_ID2),
   // appwriteCollectionId3: String(process.env.REACT_APP_APPWRITE_COLLECTION_ID3),
}

export default envimports
