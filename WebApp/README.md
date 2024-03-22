# Elly Image Management

This React web project manages images uploaded by the Elly mobile app. The Elly app serves the purpose of elephant conservation worldwide. The web application allows the admin to approve, reject, and bulk download users uploaded elephant images. Firebase is utilized as the database, with a specific document-based structure.

## Features

- **User Management:**

  - User authentication and authorization.
  - Admin and user profiles.
  - Profile details include email, name, profile type (admin, user), and photo.

- **Image Management:**

  - Approval and rejection of uploaded images.
  - Bulk download of images.

- **Firebase Integration:**
  - Utilizes Firebase as the backend database.
  - Document-based structure for efficient data storage and retrieval.

## Database Structure

### Users Collection

- **Fields:**
  - Email
  - Name
  - Profile (Admin, User)
  - Photo

### UserObservations Collection

- **Fields:**
  - Cause (if died)
  - HaveTusks
  - HowManyTuskers
  - Image
  - IntentionalKind
  - IntentionalOther
  - IsAlive
  - IsSingle
  - Location
  - NoOfDeaths
  - NoOfIndividuals
  - NoOfTusks
  - Notes
  - PhotoURL (original image)
  - RPhotos (resized images)
  - Sex
  - ShowMap (show location of the detected elephant to other users)
  - Time (time elephant detected)
  - TusksStatus
  - UID (user id)
  - UImg (user image)
  - UName (user name)
  - Verified (admin approved or not)

## Folder Structure

```
src/
|-- components/
|-- containers/
|-- cors/
|-- firebase/
|-- fonts/
|-- images/
```

## Setup and Configuration

1. Clone the repository:

   ```bash
   git clone https://github.com/c2siorg/elly.git
   ```

2. Install dependencies:

   ```bash
   cd WebApp
   npm install
   ```

3. Configure Firebase:

   - Create a new Firebase project.
   - Obtain your Firebase configuration object.
   - Replace the placeholder configuration in `src/firebase/firebaseConfig.js` with your Firebase configuration.

4. Run the application:

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contribution

Feel free to contribute to the project by submitting issues or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

Happy coding! 🚀
