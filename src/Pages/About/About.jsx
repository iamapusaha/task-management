import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">About TaskHub</h1>

            <div data-aos="zoom-out-down" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div data-aos="zoom-out-down">
                    <img src='https://www.usability.gov/sites/default/files/images/project-team-full.jpg' alt="Team" className="w-full rounded-md" />
                </div>
                <div>
                    <p className="text-lg mb-4">
                        TaskHub is a powerful task management solution designed to help individuals and teams stay organized and boost productivity.
                    </p>

                    <p className="text-lg mb-4">
                        Our mission is to provide a user-friendly platform that simplifies task management, allowing users to focus on what matters most.
                    </p>

                    <h2 data-aos="zoom-out-down" className="text-2xl font-semibold mb-4">Key Features:</h2>
                    <ul className="list-disc pl-6" >
                        <li>Intuitive and easy-to-use interface</li>
                        <li>Customizable task lists</li>
                        <li>Drag-and-drop functionality for task organization</li>
                        <li>Collaboration features for team projects</li>
                        <li>Task progress tracking and analytics</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
