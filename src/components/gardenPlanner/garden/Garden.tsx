import { useContext, useEffect, useState } from 'react';
import { GardenSizeContext } from '../GardenSizeContext';
import { GardenContainer } from '../styled-components/GardenPlanner.styles';
import GardenField from './field/GardenField';

const Garden = () => {
  const [size] = useContext(GardenSizeContext);

  const [fields, setFields] = useState<JSX.Element[][]>([[]]);

  useEffect(() => {
    let container: JSX.Element[][] = [];
    for(let i = 0; i < size.height/10; i++) {
      container.push([]);
      for(let j = 0; j < size.width/10; j++) {
        container[i].push(<GardenField></GardenField>)
      }
    }
    setFields(prev => prev=container)
  }, [size])

  return (
    <GardenContainer>
      {fields.map(row => row.map(field => field))}
    </GardenContainer>
  )
}

export default Garden
