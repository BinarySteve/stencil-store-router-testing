import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'shared-button',
  styleUrl: 'shared-button.css',
  shadow: true,
})
export class SharedButton {
  @Prop() label: string = 'Button';
  @Prop() onClickFn: () => void;

  render() {
    return (
      <button class="shared-button" onClick={this.onClickFn}>
        {this.label}
      </button>
    );
  }
}
