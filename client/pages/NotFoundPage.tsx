import * as React from 'react';

interface ButtonProps {
  onClick: (e: React.SyntheticEvent) => void;
}

const Button: React.StatelessComponent<ButtonProps> = ({
  onClick,
}) => {
  return (
    <button onClick={onClick}>
      button desu
    </button>
  );
};


interface Props {
  title: string;
}

interface State {
  isClicked: boolean;
  message: string;
}

export class NotFoundPage extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = {
      isClicked: false,
      message: 'aint clicked here',
    };
  }

  handleClick = (e: React.SyntheticEvent): void => {
    this.setState({
      message: 'clicked already man',
    });
  }

  render () {
    return (
      <div>
        <p style={{ color: 'white' }}>not found</p>

        <h3>you should go to sleep</h3>

        <Button onClick={this.handleClick}/>
        <p>{ this.state.message }</p>
      </div>
    );
  }
}
