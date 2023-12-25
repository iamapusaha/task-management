// Features.js
import React from 'react';

const Features = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">TaskHub Features</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <p className="text-lg mb-4">
                        Explore the powerful features that TaskHub offers to enhance your task management experience.
                    </p>

                    <p className="text-lg mb-4">
                        Whether you're an individual or part of a team, TaskHub provides the tools you need to stay organized and achieve your goals.
                    </p>

                    <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
                    <ul className="list-disc pl-6">
                        <li>Intuitive and easy-to-use interface</li>
                        <li>Customizable task lists</li>
                        <li>Drag-and-drop functionality for task organization</li>
                        <li>Collaboration features for team projects</li>
                        <li>Task progress tracking and analytics</li>
                        <li>Reminders and notifications</li>
                    </ul>
                </div>
                <div>
                    <img src="https://blog.kainexus.com/hubfs/dmaic_2-2.png" alt="" />                </div>
            </div>
        </div>
    );
};

export default Features;
