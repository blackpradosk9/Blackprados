rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to read and write all documents
    // This supports the static client-side administration panel of the owner
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
