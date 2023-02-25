import { render } from '@testing-library/react';

import TopicButton from './topic-button';

describe('TopicButton', () => {
  it('should render the topic name', () => {
    const { baseElement } = render(<TopicButton topicName='Next.js'/>);
    expect(baseElement).toBeTruthy();
  });
});
