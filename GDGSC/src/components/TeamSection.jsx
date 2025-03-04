import React from "react";
import Heading from "./Heading";
import TeamCard from "./TeamCard";

// test data
const teamMembers = [
    {
      name: "John Doe",
      role: "Game Designer",
      bio: "Loves designing immersive gaming experiences.",
      image: "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=600&auto=format&fit=crop&q=60"
    },
    {
      name: "Jane Smith",
      role: "Developer",
      bio: "Passionate about building high-performance games.",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&auto=format&fit=crop&q=60"
    },
    {
      name: "Mike Johnson",
      role: "UI/UX Designer",
      bio: "Creates stunning interfaces for immersive gaming experiences.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60"
    },
    {
      name: "Emily Davis",
      role: "AI Engineer",
      bio: "Works on AI-powered game mechanics and NPC behaviors.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60"
    },
    {
      name: "Chris Brown",
      role: "Game Tester",
      bio: "Ensures smooth gameplay and bug-free experiences.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60"
    },
    {
      name: "Sarah Wilson",
      role: "Story Writer",
      bio: "Writes engaging narratives for games.",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&auto=format&fit=crop&q=60"
    },
    {
      name: "Daniel Lee",
      role: "Music Composer",
      bio: "Creates epic soundtracks for immersive experiences.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60"
    },
    {
      name: "Olivia Martinez",
      role: "Marketing Specialist",
      bio: "Builds the brand and connects players with our games.",
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60"
    },
    {
      name: "David Anderson",
      role: "Backend Developer",
      bio: "Ensures smooth server and database performance.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60"
    },
    {
      name: "Sophia Turner",
      role: "Community Manager",
      bio: "Engages with the player community and organizes events.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60"
    }
  ];  

const TeamSection = () => {
  return (
    <>
        <Heading title = "MEET THE TEAM"/>
        {/* team section */}
        <div className="flex gap-6 justify-center flex-wrap shrink-0">
            {teamMembers.map((member, index) => (
                <TeamCard key={index} member={member} />
            ))}
        </div>
    </>
  );
};

export default TeamSection;
