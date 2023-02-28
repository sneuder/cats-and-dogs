import DogsList from '../../components/dogsList';
import useDogs from '../../hooks/useDogs';

const Dogs = () => {
  const { dogs } = useDogs();
  return <DogsList dogs={dogs} />;
};

export default Dogs;
