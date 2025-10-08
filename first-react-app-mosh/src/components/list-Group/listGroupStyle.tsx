import styles from './listGroupStyle.module.css';
import styled from 'styled-components';

const Li = styled.li`
  color: black;
`;
const ListGroupStyle = () => {
  return (
    <div>
      <ol className={[styles['list-group'], styles.container].join(' ')}>
        <li className='list-group-item'>Cras justo odio</li>
        <li className='list-group-item'>Cras justo odio</li>
        <li className='list-group-item'>Cras justo odio</li>
      </ol>
    </div>
  );
};

export default ListGroupStyle;
