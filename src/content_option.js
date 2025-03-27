const logotext = "Web Portfolio";
const meta = {
    title: "Web Portfolio",
    description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Panomkorn Tukkahit",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "Hello! I'm L, who started the journey into the world of Developer. With a passion for coding and creating user-friendly interfaces. So I was keen to put my skills to use in the digital world.",
    your_img_url: require("./assets/images/L.jpg"),
};

const dataabout = {
    title: "Abit About My Self",
    aboutme: "I'm interested in Full-stack Developer, Mobile Developer, IoT. Now I'm preparing to find an internship. That will help me develop my skills and learn new things",
};
const worktimeline = [{
        jobtitle: "Advice Sawaeng Ha",
        where: "Technician",
        date: "2020",
    },
    {
        jobtitle: "National Telecom Public Company Limited Singburi",
        where: "Technician",
        date: "2022",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "C",
        value: 90,
    },
    {
        name: "Java",
        value: 90,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "SQL",
        value: 70,
    },
];

const services = [{
        title: "Vocational Certificate Computer Technique ",
        description: "Singburi Technical college ",
    },
    {
        title: "High Vocational Certificate Computer Software",
        description: "Singburi Technical college ",
    },
    {
        title: "Bachelor's degree in Electronic Technology, Computer Specialization",
        description: "KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK",
    },
];
const a1Image = require("./assets/images/a1.jpg");
const a2Image = require("./assets/images/a2.jpg");
const a3Image = require("./assets/images/a3.png");
const a4Image = require("./assets/images/a4.png");
const a5Image = require("./assets/images/a5.png");
const a6Image = require("./assets/images/a6.png");
const a7Image = require("./assets/images/a7.png");
const a8Image = require("./assets/images/a8.jpg");
const dataportfolio = [{
        img: a1Image,
        description: "เคยเข้ารวมแข่งทักษะการพัฒนามัลติมีเดียแบบหลายมิติ ระดับภาค ได้รับรางวัลรองชนะเลิศอันดับที่2",
        
    },
    {
        img: a2Image,
        description: "ได้เกียรติบัตรผ่านการฝึกงานเป็นช่างเทคนิค ที่ advice",
       
    },
    {
        img: a3Image,
        description: "เข้าการแข่งขันสิ่งประดิษฐ์คนรุ่นใหม่ ผลงาน เครื่องแจกบัตรอัตโนมัติ",
        
    },
    {
        img: a4Image,
        description: "เคยเข้ารวมแข่งทักษะการจัดการ Cloud Computing ระดับภาค",
  
    },
    {
        img: a5Image,
        description: "เคยเข้ารวมแข่งทักษะการเขียนโปรแกรมควบคุมอุปกรณ์ IOT ระดับภาค",
    
    },
    {
        img: a6Image,
        description: "เข้าการแข่งขันสิ่งประดิษฐ์คนรุ่นใหม่ ผลงาน ชุดไล่อากาศในหัวพิมพ์",
        
    },

    {
        img: a7Image,
        description: "เข้าการแข่งขันสิ่งประดิษฐ์คนรุ่นใหม่ ผลงาน กังหันชาร์จไฟแรงลมต่ำ",
        
    },
    {
        img: a8Image,
        description: "",
        downloadUrl: "/Files/Transcript.pdf"
    },
];

const contactConfig = {
    YOUR_EMAIL: "aloloal409@gmail.com",
    YOUR_FONE: "092-856-3421",
    description: "Feel free to reach out to me!",
    YOUR_SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
    YOUR_USER_ID: process.env.REACT_APP_USER_ID,
};


const socialprofils = {
    github: "https://github.com/aloloal123?tab=repositories",
    facebook: "https://www.facebook.com/panomkorn.tukkahit",
    instagram: "https://www.instagram.com/_panomkorn_/",
    twitter: "https://x.com/aloloal1231",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};