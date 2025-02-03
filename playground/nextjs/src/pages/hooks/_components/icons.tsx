/* eslint-disable max-len */

'use-client';

import { HTMLAttributes } from 'react';

export const ArrowDropDown = (props?: HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" {...props}>
      <path fill="currentColor" d="M5.833 8.333L10 12.5l4.166-4.167H5.833z"></path>
    </svg>
  );
};

export const InboxIcon = (props?: HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="currentColor"
        d="M15.833 2.5H4.158c-.925 0-1.65.742-1.65 1.667L2.5 15.833A1.66 1.66 0 004.158 17.5h11.675c.917 0 1.667-.75 1.667-1.667V4.167A1.667 1.667 0 0015.833 2.5zm0 10H12.5c0 1.383-1.125 2.5-2.5 2.5a2.502 2.502 0 01-2.5-2.5H4.158V4.167h11.675V12.5z"
      ></path>
    </svg>
  );
};

export const Unread = (props?: HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="currentColor"
        d="M18.334 5.817v7.516c0 .917-.75 1.667-1.667 1.667H5l-3.333 3.333v-15c0-.916.75-1.666 1.667-1.666h8.416c-.05.266-.083.55-.083.833 0 .283.033.567.083.833H3.334v10h13.333v-6.75a4.127 4.127 0 001.667-.766zm-5-3.317c0 1.383 1.116 2.5 2.5 2.5 1.383 0 2.5-1.117 2.5-2.5S17.217 0 15.834 0a2.497 2.497 0 00-2.5 2.5z"
      ></path>
    </svg>
  );
};

export const Archive = (props?: HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="currentColor"
        d="M17.117 4.358l-1.159-1.4A1.21 1.21 0 0015 2.5H5c-.392 0-.733.175-.967.458l-1.15 1.4A1.632 1.632 0 002.5 5.417v10.416c0 .917.75 1.667 1.667 1.667h11.666c.917 0 1.667-.75 1.667-1.667V5.417c0-.4-.142-.775-.383-1.059zM5.2 4.167h9.6l.675.808H4.533l.667-.808zM4.167 15.833V6.667h11.666v9.166H4.167zm7.041-7.5H8.792v2.5H6.667L10 14.167l3.333-3.334h-2.125v-2.5z"
      ></path>
    </svg>
  );
};

export const ReadAll = (props?: HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="currentColor"
        d="M15.833 2.5H4.167C3.25 2.5 2.5 3.25 2.5 4.167v11.666c0 .917.75 1.667 1.667 1.667h11.666c.917 0 1.667-.75 1.667-1.667V4.167c0-.917-.75-1.667-1.667-1.667zm0 13.333H4.167V4.167h11.666v11.666zM14.992 7.5l-1.175-1.183-5.492 5.491-2.15-2.141-1.183 1.175 3.333 3.325L14.992 7.5z"
      ></path>
    </svg>
  );
};

export const ArchiveRead = (props?: HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="currentColor"
        d="M17.117 4.358l-1.159-1.4A1.21 1.21 0 0015 2.5H5c-.392 0-.733.175-.967.458l-1.15 1.4A1.632 1.632 0 002.5 5.417v10.416c0 .917.75 1.667 1.667 1.667h11.666c.917 0 1.667-.75 1.667-1.667V5.417c0-.4-.142-.775-.383-1.059zM10 14.583L5.417 10h2.916V8.333h3.334V10h2.916L10 14.583zM4.267 4.167l.675-.834h10l.783.834H4.267z"
      ></path>
    </svg>
  );
};

export const Dots = (props?: HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="currentColor"
        d="M5 8.333c-.917 0-1.667.75-1.667 1.667s.75 1.667 1.667 1.667c.916 0 1.666-.75 1.666-1.667S5.916 8.333 5 8.333zm10 0c-.917 0-1.667.75-1.667 1.667s.75 1.667 1.667 1.667c.916 0 1.666-.75 1.666-1.667S15.916 8.333 15 8.333zm-5 0c-.917 0-1.667.75-1.667 1.667s.75 1.667 1.667 1.667c.916 0 1.666-.75 1.666-1.667S10.916 8.333 10 8.333z"
      ></path>
    </svg>
  );
};

export const Check = (props?: HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" {...props}>
      <path fill="currentColor" d="M7.5 13.475L4.025 10l-1.183 1.175L7.5 15.833l10-10-1.175-1.175L7.5 13.475z"></path>
    </svg>
  );
};

export function NotionIcon(props: any) {
  return (
    <svg width="800px" height="800px" {...props} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.25781 3.11684C3.67771 3.45796 3.83523 3.43193 4.62369 3.37933L12.0571 2.93299C12.2147 2.93299 12.0836 2.77571 12.0311 2.74957L10.7965 1.85711C10.56 1.67347 10.2448 1.46315 9.64083 1.51576L2.44308 2.04074C2.18059 2.06677 2.12815 2.19801 2.2327 2.30322L3.25781 3.11684ZM3.7041 4.84917V12.6704C3.7041 13.0907 3.91415 13.248 4.38693 13.222L12.5562 12.7493C13.0292 12.7233 13.0819 12.4341 13.0819 12.0927V4.32397C13.0819 3.98306 12.9508 3.79921 12.6612 3.82545L4.12422 4.32397C3.80918 4.35044 3.7041 4.50803 3.7041 4.84917ZM11.7688 5.26872C11.8212 5.50518 11.7688 5.74142 11.5319 5.76799L11.1383 5.84641V11.6205C10.7965 11.8042 10.4814 11.9092 10.2188 11.9092C9.79835 11.9092 9.69305 11.7779 9.37812 11.3844L6.80345 7.34249V11.2532L7.61816 11.437C7.61816 11.437 7.61816 11.9092 6.96086 11.9092L5.14879 12.0143C5.09615 11.9092 5.14879 11.647 5.33259 11.5944L5.80546 11.4634V6.29276L5.1489 6.24015C5.09625 6.00369 5.22739 5.66278 5.5954 5.63631L7.53935 5.50528L10.2188 9.5998V5.97765L9.53564 5.89924C9.4832 5.61018 9.69305 5.40028 9.95576 5.37425L11.7688 5.26872ZM1.83874 1.33212L9.32557 0.780787C10.245 0.701932 10.4815 0.754753 11.0594 1.17452L13.4492 2.85424C13.8436 3.14309 13.975 3.22173 13.975 3.53661V12.7493C13.975 13.3266 13.7647 13.6681 13.0293 13.7203L4.33492 14.2454C3.78291 14.2717 3.52019 14.193 3.23111 13.8253L1.47116 11.5419C1.1558 11.1216 1.02466 10.8071 1.02466 10.4392V2.25041C1.02466 1.77825 1.23504 1.38441 1.83874 1.33212Z"
        fill="#000000"
      />
    </svg>
  );
}

export function EmptyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path
        fill="currentColor"
        d="M35.2 21.62L32.38 18.8L39.5 11.7L42.32 14.52C42.1 14.58 35.2 21.62 35.2 21.62ZM26 6H22V16H26V6ZM12.8 21.62L15.62 18.8L8.52 11.68L5.68 14.52C5.9 14.58 12.8 21.62 12.8 21.62ZM40 28H33.16C31.62 31.52 28.08 34 24 34C19.92 34 16.38 31.52 14.84 28H8V38H40V28ZM40 24C42.2 24 44 25.8 44 28V38C44 40.2 42.2 42 40 42H8C5.8 42 4 40.2 4 38V28C4 25.8 5.8 24 8 24H18C18 27.32 20.68 30 24 30C27.32 30 30 27.32 30 24H40Z"
      />
    </svg>
  );
}
