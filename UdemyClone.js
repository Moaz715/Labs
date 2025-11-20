import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const categoriesData = [
  { id: 1, title: "Development", subtitle: "Web, Mobile, Programming" },
  { id: 2, title: "Business", subtitle: "Finance, Management" },
  { id: 3, title: "IT & Software", subtitle: "Cloud, Security" },
  { id: 4, title: "Design", subtitle: "UX, Graphic" },
  { id: 5, title: "Marketing", subtitle: "SEO, Social Media" },
  {
    id: 6,
    title: "Personal Development",
    subtitle: "Leadership, Productivity",
  },
];

const coursesData = [
  {
    id: 101,
    title: "Complete React Developer",
    instructor: "Jane Doe",
    rating: 4.7,
    price: "$12.99",
    students: "120k",
  },
  {
    id: 102,
    title: "Python for Everybody",
    instructor: "John Smith",
    rating: 4.6,
    price: "$9.99",
    students: "250k",
  },
  {
    id: 103,
    title: "Machine Learning A-Z",
    instructor: "Andrew AI",
    rating: 4.5,
    price: "$14.99",
    students: "90k",
  },
  {
    id: 104,
    title: "UI/UX Bootcamp",
    instructor: "Sara Designer",
    rating: 4.4,
    price: "$11.99",
    students: "60k",
  },
  {
    id: 105,
    title: "Complete JavaScript",
    instructor: "Mike JS",
    rating: 4.8,
    price: "$10.99",
    students: "310k",
  },
];

const trustedData = [
  { id: 1, name: "Google" },
  { id: 2, name: "IBM" },
  { id: 3, name: "PayPal" },
  { id: 4, name: "Booking.com" },
  { id: 5, name: "Eventbrite" },
];

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">UdemyClone</div>
        <nav className="nav">
          <a href="#">Categories</a>
          <a href="#">Udemy Business</a>
          <a href="#">Teach</a>
        </nav>
        <div className="auth">
          <button className="btn ghost">Log in</button>
          <button className="btn primary">Sign up</button>
        </div>
      </div>
    </header>
  );
}

const Hero = () => (
  <section className="hero">
    <div className="container hero-inner">
      <div className="hero-copy">
        <h1>Learn anything. Expert instruction.</h1>
        <p className="muted">
          Build your career. Learn on your schedule with top instructors from
          around the world.
        </p>
        <div className="hero-cta">
          <button className="btn primary">Get started</button>
          <a href="#" className="link">
            Browse free courses
          </a>
        </div>
      </div>

      <div className="hero-media">
        <div className="media-placeholder">Hero image placeholder</div>
      </div>
    </div>
  </section>
);

const Categories = () => (
  <section className="categories">
    <h2 className="section-title">Popular topics</h2>
    <div className="categories-grid">
      {categoriesData.map((c) => (
        <div className="category-card" key={c.id}>
          <div className="category-title">{c.title}</div>
          <div className="category-sub">{c.subtitle}</div>
        </div>
      ))}
    </div>
  </section>
);

const CourseCard = ({ c }) => (
  <article className="course-card">
    <div className="course-thumb">Img</div>
    <div className="course-body">
      <h3 className="course-title">{c.title}</h3>
      <div className="course-meta">
        <span>{c.instructor}</span>
        <span> · {c.rating}</span>
      </div>
      <div className="course-bottom">
        <span className="price">{c.price}</span>
        <span className="students">{c.students} students</span>
      </div>
    </div>
  </article>
);

const CoursesSection = () => (
  <section className="courses">
    <h2 className="section-title">Top courses</h2>
    <div className="courses-grid">
      {coursesData.map((c) => (
        <CourseCard key={c.id} c={c} />
      ))}
    </div>
  </section>
);

const TrustedCompanies = () => (
  <section className="trusted">
    <h2 className="section-title">Trusted by</h2>
    <div className="trusted-grid">
      {trustedData.map((co) => (
        <div className="trusted-item" key={co.id}>
          <div className="trusted-logo">{co.name}</div>
        </div>
      ))}
    </div>
  </section>
);

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <div className="container">
        <Categories />
        <CoursesSection />
        <TrustedCompanies />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
