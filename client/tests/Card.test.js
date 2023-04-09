import Card from '../src/components/Card/Card';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { TestMocks } from '../src/utils/Constants';

configure({adapter: new Adapter()});

it('Toggles the card callout visibility after click', () => {
    const card = shallow(<Card {...TestMocks.CardMock} />);
    console.error(card);
});