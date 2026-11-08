export const Constant = {
  userList: [
    // Admin
    { userName: "admin-1", password: "123456", name: "Chetan Bhagat", role: "Admin" },
    { userName: "admin-2", password: "123456", name: "Rahul Sharma", role: "Admin" },

    // Patient
    { userName: "patient-1", password: "123456", name: "Amit Verma", role: "Patient" },
    { userName: "patient-2", password: "123456", name: "Priya Singh", role: "Patient" },
    { userName: "patient-3", password: "123456", name: "Rohit Kumar", role: "Patient" },
    { userName: "patient-4", password: "123456", name: "Sneha Gupta", role: "Patient" },
    { userName: "patient-5", password: "123456", name: "Ankit Patel", role: "Patient" },

    // Doctor
    { userName: "doctor-1", password: "123456", name: "Neha Joshi", role: "Doctor" },
    { userName: "doctor-2", password: "123456", name: "Vikash Yadav", role: "Doctor" },
    { userName: "doctor-3", password: "123456", name: "Pooja Mehta", role: "Doctor" },
    { userName: "doctor-4", password: "123456", name: "Karan Malhotra", role: "Doctor" },
    { userName: "doctor-5", password: "123456", name: "Anjali Thapa", role: "Doctor" },

    // Reception
    { userName: "reception-1", password: "123456", name: "Suman Karki", role: "Reception" },
    { userName: "reception-2", password: "123456", name: "Ramesh Adhikari", role: "Reception" },
    { userName: "reception-3", password: "123456", name: "Nisha Rai", role: "Reception" },
    { userName: "reception-4", password: "123456", name: "Bikash Shrestha", role: "Reception" },
    { userName: "reception-5", password: "123456", name: "Sabina Gurung", role: "Reception" },
    { userName: "reception-6", password: "123456", name: "Prakash KC", role: "Reception" },
    { userName: "reception-7", password: "123456", name: "Aarav Joshi", role: "Reception" },
    { userName: "reception-8", password: "123456", name: "Sita Pandey", role: "Reception" }
  ],
  menuList:[
    {menuTitle:"Dashboard",route:"dashboard",role:["Admin","Doctor","Reception"]},
    {menuTitle: "Employee" ,route:"employee",role:["Admin"]},
    {menuTitle: "Appointment List",route:"appointmentList",role:["Doctor","Reception","Patient"]},
    {menuTitle:"New Appointment",route:"new",role:["Patient","Reception"]}
  ]
};
