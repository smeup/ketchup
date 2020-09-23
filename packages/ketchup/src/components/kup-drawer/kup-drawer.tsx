import { Component, h, Prop, State, Method } from '@stencil/core';

@Component({
	tag: 'kup-drawer',
	styleUrl: 'kup-drawer.css',
	shadow: true
})
export class KupDrawer {
	@State() showContactInfo = false;
	@Prop() menu: string;
	@Prop({ reflect: true, mutable: true })
	opened: boolean;

	onCloseDrawer() {
		this.opened = false;
	}

	@Method()
	async open() {
		this.opened = true;
	}

	render() {
		let mainContent = <slot />;

		return [
			<div class="backdrop" onClick={() => this.onCloseDrawer()} />,
			<aside>
				<header>
					<h1>{this.menu}</h1>
					<button onClick={() => this.onCloseDrawer()}>X</button>
				</header>

				<main>{mainContent}</main>
			</aside>
		];
	}
}
