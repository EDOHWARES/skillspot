export const skillsData = {
    categories: {
      construction: [
        { name: "Plumbing", aliases: ["Pipe Repairs", "Leak Fixing", "Plumber"] },
        { name: "Electrical Repairs", aliases: ["Electrician", "Wiring", "Electrical Fixes"] },
        { name: "Carpentry", aliases: ["Woodwork", "Furniture Repairs", "Carpenter"] },
        { name: "Painting", aliases: ["Wall Painting", "Home Painting", "Painter"] },
        { name: "Masonry", aliases: ["Brickwork", "Concrete Work", "Stone Mason"] },
        { name: "Roofing", aliases: ["Roof Repairs", "Roof Installation", "Roofer"] },
        { name: "Floor Tiling", aliases: ["Tile Installation", "Flooring", "Tile Repairs"] },
        { name: "Glass Installation", aliases: ["Glass Repairs", "Window Installation"] },
      ],
      technology: [
        { name: "IT Support", aliases: ["Tech Support", "Computer Assistance"] },
        { name: "Web Development", aliases: ["Website Development", "Web Design"] },
        { name: "Mobile App Development", aliases: ["App Development", "Android Development", "iOS Development"] },
        { name: "Cybersecurity", aliases: ["Ethical Hacking", "Network Security", "Penetration Testing"] },
        { name: "Machine Learning", aliases: ["ML Engineering", "AI Models"] },
        { name: "Artificial Intelligence", aliases: ["AI Development", "AI Engineering", "Intelligent Systems"] },
      ],
      automotive: [
        { name: "Auto Repairs", aliases: ["Car Repair", "Mechanic", "Vehicle Maintenance"] },
        { name: "Automotive Engineering", aliases: ["Car Engineering", "Automobile Repairs"] },
        { name: "Electronics Repair", aliases: ["Car Electronics", "Auto Electronics"] },
        { name: "Mechanic Services", aliases: ["Car Mechanic", "Engine Repair"] },
      ],
      home_services: [
        { name: "Cleaning Services", aliases: ["House Cleaning", "Office Cleaning"] },
        { name: "Plumbing Repairs", aliases: ["Pipe Fixing", "Leak Repairs"] },
        { name: "Electrical Fixes", aliases: ["Electric Repairs", "Wiring Fix"] },
        { name: "Furniture Assembly", aliases: ["Furniture Installation", "Assembling Furniture"] },
        { name: "Pest Control", aliases: ["Exterminator", "Bug Removal"] },
        { name: "Carpet Cleaning", aliases: ["Rug Cleaning", "Floor Carpet Cleaning"] },
      ],
      miscellaneous: [
        { name: "Event Planning", aliases: ["Party Planning", "Event Coordination"] },
        { name: "Fitness Training", aliases: ["Workout Coaching", "Personal Trainer"] },
        { name: "Personal Shopping", aliases: ["Shopping Assistance", "Shopper"] },
        { name: "Makeup Artistry", aliases: ["Makeup Services", "Beauty Makeup"] },
        { name: "Laundry Services", aliases: ["Clothing Cleaning", "Dry Cleaning"] },
      ],
    },
  };
  
  // Flatten all skills for easy searching
  export const allSkills: string[] = Object.values(skillsData.categories)
    .flat()
    .map((skill) => [skill.name, ...(skill.aliases || [])]) // Include aliases along with skill names
    .flat()
    .sort();
  