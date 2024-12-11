# Angular Application (Frontend)

## **Overview**
The **Angular Application** serves as the user-facing frontend for the fitness platform. It enables users to browse fitness programs, track their activity, and interact with other users and administrators.

### **Features**
1. **Program Browsing and Filtering**:
   - Users can search for fitness programs based on criteria like category, price, and difficulty level.
   - Programs are displayed as cards with basic details (name, image, price).
   - Clicking a card displays more detailed information, including program description and instructor info.

2. **User Registration and Authentication**:
   - New users can register and receive an activation email with a registration confirmation link.
   - Users can log in using username and password, along with two-factor authentication via email.
   - The application supports both regular login and OAuth2 login (e.g., via Google or GitHub).

3. **Activity Tracking**:
   - Users can log their workout activities, including type, duration, and intensity.
   - The system generates graphical progress reports (e.g., weight loss over time) and allows users to export this data as a PDF.

4. **Exercise Suggestions**:
   - The frontend consumes an API to show daily exercise suggestions, including detailed instructions and difficulty levels.

5. **News Feed**:
   - The app displays an RSS feed from **AceFitFacts** to show the latest fitness-related news.

6. **User-to-User Messaging**:
   - Registered users can send messages to each other and to fitness advisors for program recommendations.

### **Implementation Details**
- The frontend is built using **Angular**, following modern web development practices for responsive design.
- Use **Bootstrap** or **Material UI** for the user interface components.
- Communicate with the backend via RESTful APIs for authentication, program details, and activity tracking.
- Implement client-side form validation and display appropriate error messages for invalid inputs.
