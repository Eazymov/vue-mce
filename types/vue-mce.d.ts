import Vue, { ComponentOptions, PluginFunction } from 'vue';

export interface VueMceComponent extends ComponentOptions<Vue> {
  content: string;
  instance: any;
  error: Error;

  handleError (err: Error): void;
  handleSuccess (editor: any): void;
  setContent (content: string): boolean;
  handleInput (): void;
  handleChange (): void;
}

export interface VueMce {
  installed: boolean;

  install: PluginFunction<never>;

  component: VueMceComponent;
}

export const VueMce: VueMce;
