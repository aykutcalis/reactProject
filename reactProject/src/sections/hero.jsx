
import styles from '../styles/Hero.module.scss';

function Hero() {
  return (
    <section className={`${styles.hero} py-5`}>
      <div className="container text-center">
        <h1 className="display-4 ">A warm welcome!</h1>
        <p className="lead">
          Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?
        </p>
        <a href="#" className="btn btn-primary mt-4">Call to Action</a>
      </div>
    </section>
  );
}

export default Hero;
