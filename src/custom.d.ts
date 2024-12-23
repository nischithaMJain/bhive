// declare module '*.png,*.jpg' {
//   const value: string;
//   export default value;
// }
declare module "*.jpg";
declare module "*.png";
declare module "*.svg";
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}