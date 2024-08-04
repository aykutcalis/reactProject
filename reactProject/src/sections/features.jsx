
import Card from "../components/card";
import styles from '../styles/Features.module.scss';

function Features() {
  const cardsData = [
    {
      icon: 'bi bi-collection',
      title: 'Fresh new layout',
      description: "With Bootstrap 5, we've created a fresh new layout for this template!"
    },
    {
      icon: 'bi bi-cloud-download',
      title: 'Free to download',
      description: 'As always, Start Bootstrap has a powerful collection of free templates.'
    },
    {
      icon: 'bi bi-card-heading',
      title: 'Jumbotron hero header',
      description: 'The heroic part of this template is the jumbotron hero header!'
    },
    {
      icon: 'bi bi-bootstrap',
      title: 'Feature boxes',
      description: "We've created some custom feature boxes using Bootstrap icons!"
    },
    {
      icon: 'bi bi-file-code',
      title: 'Simple clean code',
      description: 'We keep our dependencies up to date and squash bugs as they come!'
    },
    {
      icon: 'bi bi-patch-check',
      title: 'A name you trust',
      description: 'Start Bootstrap has been the leader in free Bootstrap templates since 2013!'
    }
  ];

  return (
    <section className={styles.features}>
      <div className="container text-center">
        <div className="row">
          {cardsData.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <Card icon={card.icon} title={card.title} description={card.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
