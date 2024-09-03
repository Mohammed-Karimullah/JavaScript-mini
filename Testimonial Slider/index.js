const testimonials = [
    {
        name: "Johnson",
        photoUrl: "https://media.istockphoto.com/id/1785518585/photo/asian-man-portrait-smile-and-financial-advisor-in-small-business-or-networking-at-office-desk.jpg?s=612x612&w=0&k=20&c=6SsvMo_r_lRqUu-L9POsKs9y0-_qayZf0c2g5Q2sYSk=",
        text: "I am beyond impressed with the sleek design and powerful performance of Apple laptops.Their innovative approach to technology truly sets them apart from the competition.I highly recommend Apple to anyone looking for top-notch quality."
    },
    {
        name: "Sarah Johnson",
        photoUrl: "https://media.istockphoto.com/id/1471845315/photo/happy-portrait-or-business-woman-taking-a-selfie-in-office-building-for-a-social-media.jpg?s=612x612&w=0&k=20&c=AOylBL01joI0zphCAFr6YVrsOgp_jd2XtVUychLXYho=",
        text: "I recently purchased a laptop from Apple and I am extremely impressed with the sleek design and powerful performance. Apple truly delivers quality and innovation in their products."
    },
    {
        name: "Dr. Maria",
        photoUrl: "https://media.istockphoto.com/id/496768522/photo/attractive-arab-businesswoman-wearing-hijab-smiling-towards-camera.jpg?s=612x612&w=0&k=20&c=sibOeXrMmTwY7TMJPPfb_OxB8AQ_1JzpCnZ_steKDao=",
        text: "Apple laptops are sleek, powerful, and reliable. I couldn't be happier with my purchase! The design is top-notch and the performance is unmatched. I highly recommend Apple for anyone in the market for a new laptop."
    },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

function updateTestimonial(){
const{name,photoUrl,text} = testimonials[idx];

imgEl.src = photoUrl;
textEl.innerText = text;
usernameEl.innerText = name;
idx++;

if(idx === testimonials.length){
    idx = 0;
}
setTimeout(() => {
    updateTestimonial();
},10000);
}
updateTestimonial();