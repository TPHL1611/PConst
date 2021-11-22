const projects = [
    {
        img1: "./assets/img/1-16.png",
        img2: "./assets/img/1-16.png",
        name: "",
        desc: "Quán Cafe Sân Vườn"
    },
    {
        img1: "./assets/img/3-16.jpg",
        img2: "./assets/img/3-16.jpg",
        name: "Mr. Ngọc",
        desc: "Nhà Phố"
    },
    {
        img1: "./assets/img/5-16.jpg",
        img2: "./assets/img/5-16.jpg",
        name: "Mr. Hà",
        desc: "Villa"
    },
    {
        img1: "./assets/img/7-16.jpg",
        img2: "./assets/img/7-16.jpg",
        name: "Mr. Dũng",
        desc: "Villa"
    },
    {
        img1: "./assets/img/9-16.jpg",
        img2: "./assets/img/9-16.jpg",
        name: "Mr. Bình",
        desc: "Villa"
    },
    {
        img1: "./assets/img/11-16.jpg",
        img2: "./assets/img/11-16.jpg",
        name: "Mr. Huy",
        desc: "Villa"
    },
    {
        img1: "./assets/img/13-16.jpg",
        img2: "./assets/img/13-16.jpg",
        name: "Mr. Quảng",
        desc: "Villa"
    },
    {
        img1: "./assets/img/15-16.jpg",
        img2: "./assets/img/15-16.jpg",
        name: "Mrs. Thương",
        desc: "Villa"
    }
]
const blogs = [
    {
        img: "./assets/img/gach-be-tong.jpg",
        name: "Gạch bê tông khí chưng áp (AAC)"
    },
    {
        img: "./assets/img/nguyen-tac-thiet-ke-thi-cong.jpg",
        name: "Các nguyên tắc cơ bản trong thiết kế và thi công"
    },
    {
        img: "./assets/img/chong-tham.jpg",
        name: "Nguyên nhân và quy trình chống thấm"
    },
    {
        img: "./assets/img/gach-be-tong.jpg",
        name: "Thiết kế"
    },
    {
        img: "./assets/img/thi-cong.jpg",
        name: "Thi công"
    },
    {
        img: "./assets/img/noi-that.jpg",
        name: "Nội thất"
    }
]

const slideIndex = 1;

function start() {
    renderProject();
    displayLine();
    renderBlog();
    currentSlide(showSlides);
}
start();

function renderProject() {
    var htmls = projects.map(function(project) {
        return `
        <div class="project_content-completed">
            <div class="project_content-completed--img">
                <img src="${project.img1}" alt=""class="col">
            </div>
            <div class="project_content-completed--name">
                <p>${project.name}</p>
            </div>
            <div class="project_content-completed--desc">
                <p>${project.desc}</p>
            </div>
        </div>
        `;
    })

    document.querySelector('.project_content').innerHTML = htmls.join('');
}

function displayLine() {
    const navLines = document.querySelectorAll('.nav_content-item');
    const line = document.querySelector('.nav_line');
    
    navLines.forEach(function(navLine) {
        navLine.onmouseover = function() {
            document.querySelector('.nav_content-item.active').classList.remove('active');
            this.classList.add('active');
    
            line.style.left = 320 + this.offsetLeft + 'px';
            line.style.width = this.offsetWidth + 'px';
        }
    })
}

function renderBlog() {
    var htmls = blogs.map(function(blog) {
        return `
            <div class="blog_content-item">
                <img src="${blog.img}" alt="" class="blog_content-img">
                <div class="blog_content-desc">
                    <p>${blog.name}</p>
                </div>
                <div class="blog_content-btn"><a href="" class="btn btn-secondary">Xem thêm</a></div>
            </div>
        `;
    })

    document.querySelector('.blog_content').innerHTML = htmls.join('');
}

function showSlides(slideIndex) {
    const Blogs = document.querySelectorAll('.blog_content-item');
    const points = document.querySelectorAll('.blog_decor-item');
    if (slideIndex > Blogs.length) {slideIndex = 1}
    if (slideIndex < 1) { slideIndex = Blogs.length}
    for (var i = 0; i < Blogs.length; i++) {
        Blogs[i].style.display = "none";
    }
    for (var i = 0; i < points.length; i++) {
        points[i].className = points[i].className.replace("active", "");
    }
    Blogs[slideIndex-1].style.display = "flex";
    points[slideIndex-1].className += " active";
}

function currentSlide(slideIndex) {
    showSlides(slideIndex)
}