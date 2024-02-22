const conf = {
  appwiretUrl: String(process.env.REACT_APP_APPWRITE_URL),
  appwriteProjectId: String(process.env.REACT_APP_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(
    process.env.REACT_APP_APPWRITE_PROJECT_DATABASE_ID
  ),
  appwriteCollectionId: String(
    process.env.REACT_APP_APPWRITE_PROJECT_COLLECTION_ID
  ),
  appwriteBucketId: String(process.env.REACT_APP_APPWRITE_PROJECT_BUCKET_ID),
};

export default conf;