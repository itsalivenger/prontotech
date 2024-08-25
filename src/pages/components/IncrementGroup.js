import IncrementedCount from './IncrementCount';
import styles from '../../assets/styles/incrementgroup.module.css';


const CountersGroup = () => {
  const countersData = [
    { title: 'Clients', targetNumber: 200, duration: 2000 },
    { title: 'Projects', targetNumber: 400, duration: 2500 },
    { title: 'Something', targetNumber: 20, duration: 1500 },
    { title: 'Another Thing', targetNumber: 90, duration: 1800 },
  ];

  return (
    <div className={styles.countersContainer}>
      {countersData.map((item, index) => (
        <IncrementedCount
          key={index}
          title={item.title}
          targetNumber={item.targetNumber}
          duration={item.duration}
        />
      ))}
    </div>
  );
};

export default CountersGroup;
