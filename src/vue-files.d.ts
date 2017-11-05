
declare module "*.vue" {
  import Vue, { ComponentOptions } from 'vue';
  const Component: ComponentOptions<Vue>;
  export default Component;
}
