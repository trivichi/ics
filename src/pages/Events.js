import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Events.css';

function Events() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: "Technical Workshop on IoT",
      date: "March 25, 2024",
      location: "VIT Vellore",
      description: "Hands-on workshop covering IoT fundamentals, sensor integration, and real-world applications."
    },
    {
      id: 2,
      title: "Guest Lecture: Future of 6G",
      date: "April 10, 2024",
      location: "Online",
      description: "Expert discussion on the evolution of wireless communications and future prospects of 6G technology."
    },
    // Add more upcoming events as needed
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Hackathon 2024",
      date: "January 15-16, 2024",
      location: "VIT Vellore",
      description: "48-hour coding challenge focused on developing innovative solutions for communication problems."
    },
    {
      id: 2,
      title: "Technical Paper Writing Workshop",
      date: "February 5, 2024",
      location: "Online",
      description: "Interactive session on writing and publishing technical papers in IEEE journals."
    },
    // Add more past events as needed
  ];

  const tabVariants = {
    active: { 
      backgroundColor: '#00b4ff', 
      color: '#ffffff',
      scale: 1.05
    },
    inactive: { 
      backgroundColor: 'transparent', 
      color: '#00b4ff',
      scale: 1
    }
  };

  return (
    <div className="events-page">
      <div className="events-content">
        <motion.h1
          className="events-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          IEEE ComSoc Events
        </motion.h1>

        <div className="event-tabs">
          <motion.button
            variants={tabVariants}
            animate={activeTab === 'upcoming' ? 'active' : 'inactive'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Events
          </motion.button>
          <motion.button
            variants={tabVariants}
            animate={activeTab === 'past' ? 'active' : 'inactive'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('past')}
          >
            Past Events
          </motion.button>
        </div>

        <motion.div
          className="events-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {(activeTab === 'upcoming' ? upcomingEvents : pastEvents).map((event) => (
            <motion.div
              key={event.id}
              className="event-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3>{event.title}</h3>
              <div className="event-details">
                <p className="event-date">{event.date}</p>
                <p className="event-location">{event.location}</p>
              </div>
              <p className="event-description">{event.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Events;
