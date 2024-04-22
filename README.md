# CertificaLink
![certifialink-layout](https://github.com/Honorato-Dev/tech-quiz/assets/101150943/a2397a61-aa34-4cce-b208-722161f3f873)

Try it: https://certifica-link.vercel.app/

#### Certificate Saver is a web application built with Next.js, React, MongoDB, and Tailwind CSS. It allows users to easily save certificates by taking a photo from any device. This app provides a convenient solution for individuals or organizations to digitally store and manage their certificates securely.

### Features
1. Photo Capture: Users can take a photo of their certificate using any device with a camera.
2. Certificate Storage: Once a photo is captured, the certificate image is stored securely in the MongoDB database.
3. User Authentication: Secure user authentication system ensures only authorized users can access and manage their certificates.
4. Search Functionality: Users can search for specific certificates using keywords or filters.
5. Responsive Design: The application is responsive and works seamlessly on various devices, including desktops, tablets, and mobile phones.
    

### Technologies Used

   - Next.js: Next.js is a React framework that enables server-side rendering and other powerful features for building web applications.
   - React: React is a JavaScript library for building user interfaces, providing a fast and efficient way to create interactive components.
   - MongoDB: MongoDB is a NoSQL database used for storing and managing certificate data.
   - Tailwind CSS: Tailwind CSS is a utility-first CSS framework that helps in quickly building custom designs without writing CSS from scratch.
### Installation

1.Clone the repository:
```bash
git clone https://github.com/Honorato-Dev/CertificaLink/
```
2. Navigate to the project directory:
```bash
cd CertificaLink
```
3. install dependecies
```bash
npm install
```

4. Set up environment variables:
   - Create ".env" file in the root directory
   - Define the following variables:

      ```bash
      MONGODB_URI=
      NEXTAUTH_URL=
      NEXTAUTH_SECRET=
      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
      NEXT_PUBLIC_CLOUDINARY_API_KEY=
      CLOUDINARY_SECRET=
      CLOUDINARY_URL=
      ```
 5. Start the development server:
    ```bash
    npm run dev
    ```
 6. Open http://localhost:3000 in your web browser to access the application.
   
    ### Deployment
1. Build the project
       ```bash
        npm run buid
       ```
2. Start the server:
       ```bash
       npm start
       ```

   ## Contributing
  
   Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

    - Fork the repository.
    - Create a new branch (git checkout -b feature/your-feature-name).
    - Make your changes and commit them (git commit -am 'Add some feature').
    - Push to the branch (git push origin feature/your-feature-name).
    - Create a new pull request.

    ## License
     This project is licensed under the MIT License - see the LICENSE file for details.

    ## Acknowledgements
    -  Next.js: https://nextjs.org/
    -  React: https://reactjs.org/
    -  MongoDB: https://www.mongodb.com/
    - Tailwind CSS: https://tailwindcss.com/
  
     ## Contact
      - For any inquiries or support, please contact us at honorato.ofc@gmail.com.
