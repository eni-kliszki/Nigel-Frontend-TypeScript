import { useContext, useEffect, useState } from 'react';
import { GardenSizeContext } from '../GardenSizeContext';
import { GardenContainer } from '../styled-components/GardenPlanner.styles';
import GardenField from './field/GardenField';

interface FieldsInterface {
  fields: typeof GardenField;
}

const Garden = () => {
  const [size] = useContext(GardenSizeContext);

  const [fields, setFields] = useState<FieldsInterface[][]>([[]]);

  useEffect(() => {

    
  }, [size])

  return (
    <GardenContainer>
      {fields.map(row => row.map(field => field))}
    </GardenContainer>
  )
}

export default Garden
