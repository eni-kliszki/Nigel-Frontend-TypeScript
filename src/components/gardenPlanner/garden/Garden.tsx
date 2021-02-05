import { useContext, useEffect, useState } from 'react';
import { GardenSizeContext } from '../GardenSizeContext';
import { GardenContainer, FullField } from '../styled-components/GardenPlanner.styles';
import GardenField from './field/GardenField';

const Garden = () => {
  const [size] = useContext(GardenSizeContext);

  const [fields, setFields] = useState<JSX.Element[][]>([[]]);

  useEffect(() => {
    let container: JSX.Element[][] = [];
    for(let i = 0; i < Math.floor(size.height/10); i++) {
      container.push([]);
      for(let j = 0; j < Math.floor(size.width/10); j++) {
        container[i].push(<GardenField key={String(j)+"-"+String(i)}></GardenField>)
      }
    }
    setFields(prev => prev=container)
  }, [size])

  return (
    <GardenContainer>
      <FullField width={size.width * 5} height={size.height * 5}>
        {fields.map(row => row.map(field => field))}
      </FullField>
    </GardenContainer>
  )
}

export default Garden
