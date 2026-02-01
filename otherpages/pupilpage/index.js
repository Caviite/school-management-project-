let students = [
    { id: 1, name: "Alex Johnson", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1998-05-14", phone: "555-0101", address: "123 Maple St, Springfield" },
    { id: 2, name: "Sarah Martinez", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Female", dob: "1999-09-22", phone: "555-0102", address: "456 Oak Ave, Riverdale" },
    { id: 3, name: "Michael Chen", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1997-11-30", phone: "555-0103", address: "789 Pine Rd, Hill Valley" },
    { id: 4, name: "Emily Parker", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Female", dob: "2000-01-12", phone: "555-0104", address: "321 Elm St, Sunnydale" },
    { id: 5, name: "David Wilson", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1998-03-25", phone: "555-0105", address: "654 Cedar Ln, Greendale" },
    { id: 6, name: "Lisa Thompson", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Inactive", gender: "Female", dob: "1996-07-08", phone: "555-0106", address: "987 Birch Blvd, Star City" },
    { id: 7, name: "James Rodriguez", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1999-12-05", phone: "555-0107", address: "159 Willow Dr, Gotham" },
    { id: 8, name: "Maria Garcia", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Female", dob: "1997-04-18", phone: "555-0108", address: "753 Aspen Ct, Metropolis" },
    { id: 9, name: "Robert Lee", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1998-08-21", phone: "555-0109", address: "852 Poplar Way, Coast City" },
    { id: 10, name: "Jennifer Brown", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Female", dob: "1999-02-14", phone: "555-0110", address: "951 Juniper Ter, Central City" },
    { id: 11, name: "Christopher Taylor", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1997-06-30", phone: "555-0111", address: "123 Main St, Springfield" },
    { id: 12, name: "Amanda White", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Female", dob: "1998-10-10", phone: "555-0112", address: "456 High St, Riverdale" },
    { id: 13, name: "Daniel Harris", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1999-01-05", phone: "555-0113", address: "789 Park Ave, Hill Valley" },
    { id: 14, name: "Jessica Clark", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Inactive", gender: "Female", dob: "2000-05-20", phone: "555-0114", address: "321 Lake Dr, Sunnydale" },
    { id: 15, name: "Matthew Lewis", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1997-12-15", phone: "555-0115", address: "654 View St, Greendale" },
    { id: 16, name: "Ashley Walker", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Female", dob: "1998-04-02", phone: "555-0116", address: "987 Hill St, Star City" },
    { id: 17, name: "Joshua Hall", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1999-08-18", phone: "555-0117", address: "159 River Rd, Gotham" },
    { id: 18, name: "Stephanie Allen", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Female", dob: "1997-03-25", phone: "555-0118", address: "753 Forest Dr, Metropolis" },
    { id: 19, name: "Andrew Young", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1998-11-11", phone: "555-0119", address: "852 Ocean Ave, Coast City" },
    { id: 20, name: "Melissa King", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Female", dob: "1999-07-07", phone: "555-0120", address: "951 Sky Ln, Central City" },
    { id: 21, name: "Kevin Wright", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1997-09-14", phone: "555-0121", address: "101 Apple St, Springfield" },
    { id: 22, name: "Laura Scott", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Female", dob: "1998-02-28", phone: "555-0122", address: "202 Berry Rd, Riverdale" },
    { id: 23, name: "Brian Green", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1999-06-15", phone: "555-0123", address: "303 Cherry Ln, Hill Valley" },
    { id: 24, name: "Nicole Adams", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Female", dob: "1997-12-01", phone: "555-0124", address: "404 Date St, Sunnydale" },
    { id: 25, name: "Ryan Baker", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Inactive", gender: "Male", dob: "1998-05-19", phone: "555-0125", address: "505 Elder Dr, Greendale" },
    { id: 26, name: "Rachel Nelson", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Female", dob: "1999-10-10", phone: "555-0126", address: "606 Fig Ct, Star City" },
    { id: 27, name: "Jason Carter", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1997-01-22", phone: "555-0127", address: "707 Grape Way, Gotham" },
    { id: 28, name: "Samantha Mitchell", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Female", dob: "1998-04-30", phone: "555-0128", address: "808 Hazel Ter, Metropolis" },
    { id: 29, name: "Brandon Perez", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1999-08-14", phone: "555-0129", address: "909 Ivy Dr, Coast City" },
    { id: 30, name: "Megan Roberts", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Female", dob: "1997-03-03", phone: "555-0130", address: "111 Jade Ln, Central City" },
    { id: 31, name: "Justin Turner", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1998-11-20", phone: "555-0131", address: "222 Kale St, Springfield" },
    { id: 32, name: "Lauren Phillips", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Female", dob: "1999-02-02", phone: "555-0132", address: "333 Lime Blvd, Riverdale" },
    { id: 33, name: "Eric Campbell", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1997-06-18", phone: "555-0133", address: "444 Mint Rd, Hill Valley" },
    { id: 34, name: "Brittany Parker", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Female", dob: "1998-09-09", phone: "555-0134", address: "555 Nut Dr, Sunnydale" },
    { id: 35, name: "Aaron Evans", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1999-12-12", phone: "555-0135", address: "666 Olive Ave, Greendale" },
    { id: 36, name: "Heather Edwards", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Inactive", gender: "Female", dob: "1997-05-05", phone: "555-0136", address: "777 Pear St, Star City" },
    { id: 37, name: "Adam Collins", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1998-08-08", phone: "555-0137", address: "888 Quartz Rd, Gotham" },
    { id: 38, name: "Catherine Stewart", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Female", dob: "1999-01-01", phone: "555-0138", address: "999 Rice Ln, Metropolis" },
    { id: 39, name: "Nathan Sanchez", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1997-04-04", phone: "555-0139", address: "121 Soda St, Coast City" },
    { id: 40, name: "Victoria Morris", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Female", dob: "1998-07-07", phone: "555-0140", address: "131 Tea Dr, Central City" },
    { id: 41, name: "Zachary Rogers", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1999-10-10", phone: "555-0141", address: "141 Udon Ln, Springfield" },
    { id: 42, name: "Amber Reed", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Female", dob: "1997-12-12", phone: "555-0142", address: "151 Vine St, Riverdale" },
    { id: 43, name: "Kyle Cook", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1998-03-03", phone: "555-0143", address: "161 Wheat Rd, Hill Valley" },
    { id: 44, name: "Danielle Morgan", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Female", dob: "1999-06-06", phone: "555-0144", address: "171 Yam Way, Sunnydale" },
    { id: 45, name: "Tyler Bell", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1997-09-09", phone: "555-0145", address: "181 Zest Dr, Greendale" },
    { id: 46, name: "Kayla Murphy", cohort: "January-Cohort", program: "Full Stack Web Development", status: "Inactive", gender: "Female", dob: "1998-02-02", phone: "555-0146", address: "191 Apple St, Star City" },
    { id: 47, name: "Jacob Bailey", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1999-05-05", phone: "555-0147", address: "201 Bean Rd, Gotham" },
    { id: 48, name: "Olivia Rivera", cohort: "February-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Female", dob: "1997-08-08", phone: "555-0148", address: "211 Corn Ln, Metropolis" },
    { id: 49, name: "Ethan Cooper", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Male", dob: "1998-11-11", phone: "555-0149", address: "221 Dill Ter, Coast City" },
    { id: 50, name: "Hannah Richardson", cohort: "March-Cohort", program: "Full Stack Web Development", status: "Active", gender: "Female", dob: "1999-01-25", phone: "555-0150", address: "231 Egg Blvd, Central City" },

    { id: 51, name: "Marcus Thompson", cohort: "January-Cohort", program: "Mobile Development", status: "Active", gender: "Male", dob: "1998-04-14", phone: "555-0151", address: "241 Fish St, Springfield" },
    { id: 52, name: "Sophia Anderson", cohort: "January-Cohort", program: "Mobile Development", status: "Active", gender: "Female", dob: "1999-07-20", phone: "555-0152", address: "251 Gum Ave, Riverdale" },
    { id: 53, name: "Lucas Martinez", cohort: "January-Cohort", program: "Mobile Development", status: "Active", gender: "Male", dob: "1997-10-05", phone: "555-0153", address: "261 Ham Rd, Hill Valley" },
    { id: 54, name: "Isabella Davis", cohort: "January-Cohort", program: "Mobile Development", status: "Active", gender: "Female", dob: "1998-01-12", phone: "555-0154", address: "271 Ice Dr, Sunnydale" },
    { id: 55, name: "Mason Wilson", cohort: "January-Cohort", program: "Mobile Development", status: "Active", gender: "Male", dob: "1999-03-30", phone: "555-0155", address: "281 Jam St, Greendale" },
    { id: 56, name: "Emma Moore", cohort: "January-Cohort", program: "Mobile Development", status: "Inactive", gender: "Female", dob: "1997-06-18", phone: "555-0156", address: "291 Kelp Blvd, Star City" },
    { id: 57, name: "Logan Jackson", cohort: "February-Cohort", program: "Mobile Development", status: "Active", gender: "Male", dob: "1998-09-25", phone: "555-0157", address: "301 Leaf Rd, Gotham" },
    { id: 58, name: "Ava Taylor", cohort: "February-Cohort", program: "Mobile Development", status: "Active", gender: "Female", dob: "1999-12-01", phone: "555-0158", address: "311 Mud Ter, Metropolis" },
    { id: 59, name: "Jackson Thomas", cohort: "February-Cohort", program: "Mobile Development", status: "Active", gender: "Male", dob: "1997-02-14", phone: "555-0159", address: "321 Nut Way, Coast City" },
    { id: 60, name: "Mia Hernandez", cohort: "February-Cohort", program: "Mobile Development", status: "Active", gender: "Female", dob: "1998-05-20", phone: "555-0160", address: "331 Oak Ln, Central City" },
    { id: 61, name: "Aiden Garcia", cohort: "February-Cohort", program: "Mobile Development", status: "Active", gender: "Male", dob: "1999-08-08", phone: "555-0161", address: "341 Pea St, Springfield" },
    { id: 62, name: "Charlotte Martinez", cohort: "February-Cohort", program: "Mobile Development", status: "Active", gender: "Female", dob: "1997-11-11", phone: "555-0162", address: "351 Quilt Rd, Riverdale" },
    { id: 63, name: "Elijah Robinson", cohort: "March-Cohort", program: "Mobile Development", status: "Active", gender: "Male", dob: "1998-01-01", phone: "555-0163", address: "361 Root Dr, Hill Valley" },
    { id: 64, name: "Amelia Clark", cohort: "March-Cohort", program: "Mobile Development", status: "Active", gender: "Female", dob: "1999-04-04", phone: "555-0164", address: "371 Seed Ave, Sunnydale" },
    { id: 65, name: "Oliver Rodriguez", cohort: "March-Cohort", program: "Mobile Development", status: "Active", gender: "Male", dob: "1997-07-07", phone: "555-0165", address: "381 Tree Rd, Greendale" },
    { id: 66, name: "Harper Lewis", cohort: "March-Cohort", program: "Mobile Development", status: "Inactive", gender: "Female", dob: "1998-10-10", phone: "555-0166", address: "391 Urn St, Star City" },
    { id: 67, name: "Benjamin Lee", cohort: "March-Cohort", program: "Mobile Development", status: "Active", gender: "Male", dob: "1999-01-22", phone: "555-0167", address: "401 Vase Ln, Gotham" },
    { id: 68, name: "Evelyn Walker", cohort: "March-Cohort", program: "Mobile Development", status: "Active", gender: "Female", dob: "1997-03-30", phone: "555-0168", address: "411 Wood Rd, Metropolis" },
    { id: 69, name: "Sebastian Hall", cohort: "January-Cohort", program: "Mobile Development", status: "Active", gender: "Male", dob: "1998-06-15", phone: "555-0169", address: "421 Yard St, Coast City" },
    { id: 70, name: "Abigail Allen", cohort: "January-Cohort", program: "Mobile Development", status: "Active", gender: "Female", dob: "1999-09-09", phone: "555-0170", address: "431 Zinc Dr, Central City" },
    { id: 71, name: "Alexander Young", cohort: "January-Cohort", program: "Mobile Development", status: "Active", gender: "Male", dob: "1997-12-12", phone: "555-0171", address: "441 Ant Ln, Springfield" },
    { id: 72, name: "Emily King", cohort: "February-Cohort", program: "Mobile Development", status: "Active", gender: "Female", dob: "1998-02-14", phone: "555-0172", address: "451 Bee St, Riverdale" },
    { id: 73, name: "Jack Wright", cohort: "February-Cohort", program: "Mobile Development", status: "Active", gender: "Male", dob: "1999-05-19", phone: "555-0173", address: "461 Cat Rd, Hill Valley" },
    { id: 74, name: "Elizabeth Scott", cohort: "February-Cohort", program: "Mobile Development", status: "Active", gender: "Female", dob: "1997-08-01", phone: "555-0174", address: "471 Dog Ave, Sunnydale" },
    { id: 75, name: "Henry Torres", cohort: "March-Cohort", program: "Mobile Development", status: "Inactive", gender: "Male", dob: "1998-11-20", phone: "555-0175", address: "481 Eel Dr, Greendale" },
    { id: 76, name: "Sofia Nguyen", cohort: "March-Cohort", program: "Mobile Development", status: "Active", gender: "Female", dob: "1999-01-01", phone: "555-0176", address: "491 Fox Ln, Star City" },
    { id: 77, name: "Samuel Hill", cohort: "January-Cohort", program: "Mobile Development", status: "Active", gender: "Male", dob: "1997-04-04", phone: "555-0177", address: "501 Gem Way, Gotham" },
    { id: 78, name: "Avery Flores", cohort: "January-Cohort", program: "Mobile Development", status: "Active", gender: "Female", dob: "1998-07-07", phone: "555-0178", address: "511 Hay Ter, Metropolis" },
    { id: 79, name: "William Green", cohort: "February-Cohort", program: "Mobile Development", status: "Active", gender: "Male", dob: "1999-10-10", phone: "555-0179", address: "521 Ivy Dr, Coast City" },
    { id: 80, name: "Ella Adams", cohort: "February-Cohort", program: "Mobile Development", status: "Active", gender: "Female", dob: "1997-12-25", phone: "555-0180", address: "531 Jar Ln, Central City" },
    { id: 81, name: "James Nelson", cohort: "March-Cohort", program: "Mobile Development", status: "Active", gender: "Male", dob: "1998-03-03", phone: "555-0181", address: "541 Key St, Springfield" },
    { id: 82, name: "Scarlett Baker", cohort: "March-Cohort", program: "Mobile Development", status: "Active", gender: "Female", dob: "1999-06-06", phone: "555-0182", address: "551 Lid Rd, Riverdale" },
    { id: 83, name: "Carter Gonzalez", cohort: "January-Cohort", program: "Mobile Development", status: "Active", gender: "Male", dob: "1997-09-09", phone: "555-0183", address: "561 Map Ln, Hill Valley" },
    { id: 84, name: "Grace Wilson", cohort: "January-Cohort", program: "Mobile Development", status: "Active", gender: "Female", dob: "1998-12-12", phone: "555-0184", address: "571 Net Ave, Sunnydale" },
    { id: 85, name: "Owen Mitchell", cohort: "February-Cohort", program: "Mobile Development", status: "Active", gender: "Male", dob: "1999-03-15", phone: "555-0185", address: "581 Owl Dr, Greendale" },
    { id: 86, name: "Chloe Perez", cohort: "February-Cohort", program: "Mobile Development", status: "Inactive", gender: "Female", dob: "1997-06-01", phone: "555-0186", address: "591 Pen St, Star City" },
    { id: 87, name: "Wyatt Roberts", cohort: "March-Cohort", program: "Mobile Development", status: "Active", gender: "Male", dob: "1998-09-18", phone: "555-0187", address: "601 Quip Rd, Gotham" },
    { id: 88, name: "Lily Turner", cohort: "March-Cohort", program: "Mobile Development", status: "Active", gender: "Female", dob: "1999-12-12", phone: "555-0188", address: "611 Rat Ln, Metropolis" },
    { id: 89, name: "Luke Phillips", cohort: "January-Cohort", program: "Mobile Development", status: "Active", gender: "Male", dob: "1997-02-02", phone: "555-0189", address: "621 Sun Way, Coast City" },
    { id: 90, name: "Zoe Campbell", cohort: "January-Cohort", program: "Mobile Development", status: "Active", gender: "Female", dob: "1998-05-05", phone: "555-0190", address: "631 Toy Ter, Central City" },
    { id: 91, name: "Jayden Parker", cohort: "February-Cohort", program: "Mobile Development", status: "Active", gender: "Male", dob: "1999-08-08", phone: "555-0191", address: "641 Urn Rd, Springfield" },
    { id: 92, name: "Layla Evans", cohort: "February-Cohort", program: "Mobile Development", status: "Active", gender: "Female", dob: "1997-11-11", phone: "555-0192", address: "651 Van Ln, Riverdale" },
    { id: 93, name: "Gabriel Edwards", cohort: "March-Cohort", program: "Mobile Development", status: "Active", gender: "Male", dob: "1998-01-20", phone: "555-0193", address: "661 Wax Ave, Hill Valley" },

    { id: 94, name: "Nina Collins", cohort: "January-Cohort", program: "Data Science", status: "Active", gender: "Female", dob: "1999-04-14", phone: "555-0194", address: "671 Yak Dr, Sunnydale" },
    { id: 95, name: "Isaac Stewart", cohort: "January-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1997-07-25", phone: "555-0195", address: "681 Zip Ln, Greendale" },
    { id: 96, name: "Aria Sanchez", cohort: "January-Cohort", program: "Data Science", status: "Active", gender: "Female", dob: "1998-10-05", phone: "555-0196", address: "691 Air St, Star City" },
    { id: 97, name: "Julian Morris", cohort: "January-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1999-01-12", phone: "555-0197", address: "701 Box Rd, Gotham" },
    { id: 98, name: "Nora Rogers", cohort: "January-Cohort", program: "Data Science", status: "Inactive", gender: "Female", dob: "1997-03-30", phone: "555-0198", address: "711 Cup Ln, Metropolis" },
    { id: 99, name: "Leo Reed", cohort: "January-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1998-06-15", phone: "555-0199", address: "721 Dot Way, Coast City" },
    { id: 100, name: "Hannah Cook", cohort: "February-Cohort", program: "Data Science", status: "Active", gender: "Female", dob: "1999-09-09", phone: "555-0200", address: "731 Egg Ter, Central City" },
    { id: 101, name: "Levi Morgan", cohort: "February-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1997-12-12", phone: "555-0201", address: "741 Fan Rd, Springfield" },
    { id: 102, name: "Lillian Bell", cohort: "February-Cohort", program: "Data Science", status: "Active", gender: "Female", dob: "1998-02-14", phone: "555-0202", address: "751 Gig Ln, Riverdale" },
    { id: 103, name: "Mateo Murphy", cohort: "February-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1999-05-19", phone: "555-0203", address: "761 Hut Way, Hill Valley" },
    { id: 104, name: "Addison Bailey", cohort: "February-Cohort", program: "Data Science", status: "Active", gender: "Female", dob: "1997-08-01", phone: "555-0204", address: "771 Ink Dr, Sunnydale" },
    { id: 105, name: "Grayson Rivera", cohort: "February-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1998-11-20", phone: "555-0205", address: "781 Joy St, Greendale" },
    { id: 106, name: "Ellie Cooper", cohort: "March-Cohort", program: "Data Science", status: "Inactive", gender: "Female", dob: "1999-01-01", phone: "555-0206", address: "791 Kit Rd, Star City" },
    { id: 107, name: "Asher Richardson", cohort: "March-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1997-04-04", phone: "555-0207", address: "801 Log Ln, Gotham" },
    { id: 108, name: "Zoey Cox", cohort: "March-Cohort", program: "Data Science", status: "Active", gender: "Female", dob: "1998-07-07", phone: "555-0208", address: "811 Mud Ter, Metropolis" },
    { id: 109, name: "Lincoln Howard", cohort: "March-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1999-10-10", phone: "555-0209", address: "821 Net Way, Coast City" },
    { id: 110, name: "Penelope Ward", cohort: "March-Cohort", program: "Data Science", status: "Active", gender: "Female", dob: "1997-12-25", phone: "555-0210", address: "831 Owl Ln, Central City" },
    { id: 111, name: "Ezra Torres", cohort: "March-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1998-03-03", phone: "555-0211", address: "841 Pod St, Springfield" },
    { id: 112, name: "Aurora Peterson", cohort: "January-Cohort", program: "Data Science", status: "Active", gender: "Female", dob: "1999-06-06", phone: "555-0212", address: "851 Quip Rd, Riverdale" },
    { id: 113, name: "Hudson Gray", cohort: "January-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1997-09-09", phone: "555-0213", address: "861 Rim Way, Hill Valley" },
    { id: 114, name: "Hazel Ramirez", cohort: "January-Cohort", program: "Data Science", status: "Active", gender: "Female", dob: "1998-12-12", phone: "555-0214", address: "871 Sun Ter, Sunnydale" },
    { id: 115, name: "Maverick James", cohort: "February-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1999-03-15", phone: "555-0215", address: "881 Toy Dr, Greendale" },
    { id: 116, name: "Violet Watson", cohort: "February-Cohort", program: "Data Science", status: "Inactive", gender: "Female", dob: "1997-06-01", phone: "555-0216", address: "891 Urn Ln, Star City" },
    { id: 117, name: "Easton Brooks", cohort: "February-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1998-09-18", phone: "555-0217", address: "901 Van Way, Gotham" },
    { id: 118, name: "Claire Kelly", cohort: "March-Cohort", program: "Data Science", status: "Active", gender: "Female", dob: "1999-12-12", phone: "555-0218", address: "911 Wax Ter, Metropolis" },
    { id: 119, name: "Jaxon Sanders", cohort: "March-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1997-02-02", phone: "555-0219", address: "921 Yak Dr, Coast City" },
    { id: 120, name: "Skylar Price", cohort: "March-Cohort", program: "Data Science", status: "Active", gender: "Female", dob: "1998-05-05", phone: "555-0220", address: "931 Zip Ln, Central City" },
    { id: 121, name: "Colton Bennett", cohort: "January-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1999-08-08", phone: "555-0221", address: "941 Art St, Springfield" },
    { id: 122, name: "Bella Wood", cohort: "January-Cohort", program: "Data Science", status: "Active", gender: "Female", dob: "1997-11-11", phone: "555-0222", address: "951 Box Rd, Riverdale" },
    { id: 123, name: "Cooper Barnes", cohort: "February-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1998-01-20", phone: "555-0223", address: "961 Cup Ln, Hill Valley" },
    { id: 124, name: "Paisley Ross", cohort: "February-Cohort", program: "Data Science", status: "Active", gender: "Female", dob: "1999-04-14", phone: "555-0224", address: "971 Dot Way, Sunnydale" },
    { id: 125, name: "Carson Henderson", cohort: "March-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1997-07-25", phone: "555-0225", address: "981 Egg Ter, Greendale" },
    { id: 126, name: "Savannah Coleman", cohort: "March-Cohort", program: "Data Science", status: "Inactive", gender: "Female", dob: "1998-10-05", phone: "555-0226", address: "991 Fan Rd, Star City" },
    { id: 127, name: "Axel Jenkins", cohort: "January-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1999-01-12", phone: "555-0227", address: "102 Gig Ln, Gotham" },
    { id: 128, name: "Lucy Perry", cohort: "January-Cohort", program: "Data Science", status: "Active", gender: "Female", dob: "1997-03-30", phone: "555-0228", address: "202 Hut Way, Metropolis" },
    { id: 129, name: "Dominic Powell", cohort: "February-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1998-06-15", phone: "555-0229", address: "302 Ink Dr, Coast City" },
    { id: 130, name: "Stella Long", cohort: "February-Cohort", program: "Data Science", status: "Active", gender: "Female", dob: "1999-09-09", phone: "555-0230", address: "402 Joy St, Central City" },
    { id: 131, name: "Silas Patterson", cohort: "March-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1997-12-12", phone: "555-0231", address: "502 Kit Rd, Springfield" },
    { id: 132, name: "Elena Hughes", cohort: "March-Cohort", program: "Data Science", status: "Active", gender: "Female", dob: "1998-02-14", phone: "555-0232", address: "602 Log Ln, Riverdale" },
    { id: 133, name: "Jace Flores", cohort: "January-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1999-05-19", phone: "555-0233", address: "702 Mud Ter, Hill Valley" },
    { id: 134, name: "Alice Washington", cohort: "January-Cohort", program: "Data Science", status: "Active", gender: "Female", dob: "1997-08-01", phone: "555-0234", address: "802 Net Way, Sunnydale" },
    { id: 135, name: "Kai Butler", cohort: "February-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1998-11-20", phone: "555-0235", address: "902 Owl Ln, Greendale" },
    { id: 136, name: "Madelyn Simmons", cohort: "February-Cohort", program: "Data Science", status: "Inactive", gender: "Female", dob: "1999-01-01", phone: "555-0236", address: "103 Pod St, Star City" },
    { id: 137, name: "Rhett Foster", cohort: "March-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1997-04-04", phone: "555-0237", address: "203 Quip Rd, Gotham" },
    { id: 138, name: "Kinsley Gonzales", cohort: "March-Cohort", program: "Data Science", status: "Active", gender: "Female", dob: "1998-07-07", phone: "555-0238", address: "303 Rim Way, Metropolis" },
    { id: 139, name: "Miles Bryant", cohort: "January-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1999-10-10", phone: "555-0239", address: "403 Sun Ter, Coast City" },
    { id: 140, name: "Naomi Alexander", cohort: "January-Cohort", program: "Data Science", status: "Active", gender: "Female", dob: "1997-12-25", phone: "555-0240", address: "503 Toy Dr, Central City" },
    { id: 141, name: "Beckett Russell", cohort: "February-Cohort", program: "Data Science", status: "Active", gender: "Male", dob: "1998-03-03", phone: "555-0241", address: "603 Urn Ln, Springfield" },

    { id: 142, name: "Preston Griffin", cohort: "January-Cohort", program: "DevOps Engineering", status: "Active", gender: "Male", dob: "1999-06-06", phone: "555-0242", address: "703 Van Way, Riverdale" },
    { id: 143, name: "Ivy Diaz", cohort: "January-Cohort", program: "DevOps Engineering", status: "Active", gender: "Female", dob: "1997-09-09", phone: "555-0243", address: "803 Wax Ter, Hill Valley" },
    { id: 144, name: "Roman Hayes", cohort: "January-Cohort", program: "DevOps Engineering", status: "Active", gender: "Male", dob: "1998-12-12", phone: "555-0244", address: "903 Yak Dr, Sunnydale" },
    { id: 145, name: "Isabelle Myers", cohort: "January-Cohort", program: "DevOps Engineering", status: "Active", gender: "Female", dob: "1999-03-15", phone: "555-0245", address: "104 Zip Ln, Greendale" },
    { id: 146, name: "Knox Ford", cohort: "January-Cohort", program: "DevOps Engineering", status: "Inactive", gender: "Male", dob: "1997-06-01", phone: "555-0246", address: "204 Art St, Star City" },
    { id: 147, name: "Natalie Hamilton", cohort: "February-Cohort", program: "DevOps Engineering", status: "Active", gender: "Female", dob: "1998-09-18", phone: "555-0247", address: "304 Box Rd, Gotham" },
    { id: 148, name: "Felix Graham", cohort: "February-Cohort", program: "DevOps Engineering", status: "Active", gender: "Male", dob: "1999-12-12", phone: "555-0248", address: "404 Cup Ln, Metropolis" },
    { id: 149, name: "Julia Sullivan", cohort: "February-Cohort", program: "DevOps Engineering", status: "Active", gender: "Female", dob: "1997-02-02", phone: "555-0249", address: "504 Dot Way, Coast City" },
    { id: 150, name: "Theo Wallace", cohort: "February-Cohort", program: "DevOps Engineering", status: "Active", gender: "Male", dob: "1998-05-05", phone: "555-0250", address: "604 Egg Ter, Central City" },
    { id: 151, name: "Emilia Woods", cohort: "February-Cohort", program: "DevOps Engineering", status: "Active", gender: "Female", dob: "1999-08-08", phone: "555-0251", address: "704 Fan Rd, Springfield" },
    { id: 152, name: "Ezekiel Cole", cohort: "March-Cohort", program: "DevOps Engineering", status: "Active", gender: "Male", dob: "1997-11-11", phone: "555-0252", address: "804 Gig Ln, Riverdale" },
    { id: 153, name: "Piper West", cohort: "March-Cohort", program: "DevOps Engineering", status: "Active", gender: "Female", dob: "1998-01-20", phone: "555-0253", address: "904 Hut Way, Hill Valley" },
    { id: 154, name: "Rowan Jordan", cohort: "March-Cohort", program: "DevOps Engineering", status: "Inactive", gender: "Male", dob: "1999-04-14", phone: "555-0254", address: "105 Ink Dr, Sunnydale" },
    { id: 155, name: "Ruby Owens", cohort: "March-Cohort", program: "DevOps Engineering", status: "Active", gender: "Female", dob: "1997-07-25", phone: "555-0255", address: "205 Joy St, Greendale" },
    { id: 156, name: "Atlas Reynolds", cohort: "March-Cohort", program: "DevOps Engineering", status: "Active", gender: "Male", dob: "1998-10-05", phone: "555-0256", address: "305 Kit Rd, Star City" },
    { id: 157, name: "Willow Fisher", cohort: "January-Cohort", program: "DevOps Engineering", status: "Active", gender: "Female", dob: "1999-01-12", phone: "555-0257", address: "405 Log Ln, Gotham" },
    { id: 158, name: "Declan Ellis", cohort: "January-Cohort", program: "DevOps Engineering", status: "Active", gender: "Male", dob: "1997-03-30", phone: "555-0258", address: "505 Mud Ter, Metropolis" },
    { id: 159, name: "Adalynn Gibson", cohort: "February-Cohort", program: "DevOps Engineering", status: "Active", gender: "Female", dob: "1998-06-15", phone: "555-0259", address: "605 Net Way, Coast City" },
    { id: 160, name: "Barrett McDonald", cohort: "February-Cohort", program: "DevOps Engineering", status: "Active", gender: "Male", dob: "1999-09-09", phone: "555-0260", address: "705 Owl Ln, Central City" },
    { id: 161, name: "Quinn Cruz", cohort: "March-Cohort", program: "DevOps Engineering", status: "Active", gender: "Female", dob: "1997-12-12", phone: "555-0261", address: "805 Pod St, Springfield" },
    { id: 162, name: "Remi Marshall", cohort: "March-Cohort", program: "DevOps Engineering", status: "Inactive", gender: "Male", dob: "1998-02-14", phone: "555-0262", address: "905 Quip Rd, Riverdale" },
    { id: 163, name: "Bowen Ortiz", cohort: "January-Cohort", program: "DevOps Engineering", status: "Active", gender: "Male", dob: "1999-05-19", phone: "555-0263", address: "106 Rim Way, Hill Valley" },
    { id: 164, name: "Gianna Gomez", cohort: "January-Cohort", program: "DevOps Engineering", status: "Active", gender: "Female", dob: "1997-08-01", phone: "555-0264", address: "206 Sun Ter, Sunnydale" },
    { id: 165, name: "Finnegan Murray", cohort: "February-Cohort", program: "DevOps Engineering", status: "Active", gender: "Male", dob: "1998-11-20", phone: "555-0265", address: "306 Toy Dr, Greendale" },
    { id: 166, name: "Emery Freeman", cohort: "February-Cohort", program: "DevOps Engineering", status: "Active", gender: "Female", dob: "1999-01-01", phone: "555-0266", address: "406 Urn Ln, Star City" },
    { id: 167, name: "Wilder Wells", cohort: "March-Cohort", program: "DevOps Engineering", status: "Active", gender: "Male", dob: "1997-04-04", phone: "555-0267", address: "506 Van Way, Gotham" },
    { id: 168, name: "Raelynn Webb", cohort: "March-Cohort", program: "DevOps Engineering", status: "Active", gender: "Female", dob: "1998-07-07", phone: "555-0268", address: "606 Wax Ter, Metropolis" },
    { id: 169, name: "Brooks Simpson", cohort: "January-Cohort", program: "DevOps Engineering", status: "Active", gender: "Male", dob: "1999-10-10", phone: "555-0269", address: "706 Yak Dr, Coast City" }
];

// Assuming your array is named 'students' as provided earlier
// And assuming we add an 'email' property to the students (since it's in your HTML)

// --- 1. THE UI UPDATE FUNCTION ---
// 1. YOUR ARRAY (Already there)

// 2. THE FIND AND DISPLAY FUNCTION
function displayStudentInfo(emailInput) {
    const student = students.find(s => {
        // Normalize name: "Nora Rogers" -> "norarogers"
        const nameClean = s.name.toLowerCase().replace(/\s+/g, '');

        // Normalize input: "nora.rogers@school.com" -> "norarogers"
        const inputClean = emailInput.toLowerCase()
            .split('@')[0]
            .replace(/\./g, '')
            .trim();

        return nameClean === inputClean;
    });

    if (student) {
        // Update the HTML using your CSS classes
        document.querySelector('.hero-text h1').textContent = student.name;
        document.querySelector('.top-bar-user span strong').textContent = emailInput;
        document.querySelector('.hero-text p').textContent = `${student.program} • ${student.cohort}`;
        document.querySelector('.badge-id').textContent = `ID: 2025/STU/${student.id}`;

        // Update Personal Details
        const personalValues = document.querySelectorAll('.data-card')[0].querySelectorAll('.data-row strong');
        personalValues[0].textContent = student.dob;
        personalValues[1].textContent = student.gender;

        // Update Contact Info
        const contactValues = document.querySelectorAll('.data-card')[1].querySelectorAll('.data-row strong');
        contactValues[0].textContent = emailInput;
        contactValues[1].textContent = student.phone;
        contactValues[2].textContent = student.address;

        // Update Avatar
        document.querySelector('.hero-avatar').src = `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=2563eb&color=fff`;
    } else {
        console.error("Still no match for:", emailInput);
    }
}

// 3. THE AUTO-START
document.addEventListener('DOMContentLoaded', () => {
    const emailToLookUp = localStorage.getItem('currentUserEmail');
    if (emailToLookUp) {
        displayStudentInfo(emailToLookUp);
    }
});

document.querySelector('.logout-minimal').addEventListener('click', () => {
    localStorage.removeItem('currentUserEmail'); // Clear the session
    window.location.href = "../../login/index.html"; // Go home
});
