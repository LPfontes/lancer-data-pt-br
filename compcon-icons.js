// compcon-icons.js - Vetores SVG oficiais inspirados no COMP/CON
const CC_ICONS = {
  // Logo GMS
  gms: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 780.5 24 24" class="cc-svg-icon"><path fill="currentColor" d="M10.468,792.449l-4.811-8.564c-0.045-0.08-0.129-0.129-0.221-0.129H-4.651c-0.194,0-0.315,0.208-0.22,0.377l4.666,8.252 c0.044,0.078,0.043,0.175-0.002,0.252l-4.818,8.228c-0.099,0.168,0.023,0.38,0.218,0.38H5.285c0.089,0,0.172-0.047,0.218-0.124 l4.963-8.419C10.511,792.624,10.512,792.527,10.468,792.449z"></path><path fill="currentColor" d="M-5.967,786.217l-3.5,6.19c-0.044,0.078-0.043,0.174,0.002,0.252l3.5,5.976c0.13,0.223,0.471,0.131,0.471-0.127v-12.166 C-5.494,786.081-5.839,785.99-5.967,786.217z"></path></svg>`,

  // Ícone de Ameaça (Threat)
  threat: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 780.5 24 24" class="cc-svg-icon"><path fill="currentColor" d="M0.51,798.62l2.32-2.32l3.42,3.42l-1.33,1.33l1.46,1.46l4.12-4.12l-1.46-1.46l-1.33,1.33l-3.42-3.42l2.34-2.34l-2.34-2.34 l3.41-3.42l1.33,1.33l1.46-1.46l-4.12-4.12l-1.46,1.46l1.33,1.34l-3.41,3.41l-2.33-2.33l-2.33,2.33l-3.42-3.42l1.33-1.33l-1.46-1.46 l-4.12,4.12l1.46,1.46l1.33-1.33l3.42,3.42l-2.33,2.33l2.33,2.33l-3.42,3.42l-1.33-1.33l-1.46,1.46l4.12,4.12l1.46-1.46l-1.33-1.34 l3.42-3.42L0.51,798.62z M0.51,788.32l4.18,4.18l-4.18,4.18l-4.18-4.18L0.51,788.32z"></path></svg>`,

  // Dano Cinético (Kinetic)
  kinetic: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 780.5 24 24" class="cc-svg-icon"><path fill="currentColor" d="M0.5,785.5c-1.86,0-3.74,0.84-4.95,2.05c-1.21,1.21-2.05,3.09-2.05,4.95s0.84,3.74,2.05,4.95c1.21,1.21,3.09,2.05,4.95,2.05 s3.74-0.84,4.95-2.05c1.21-1.21,2.05-3.09,2.05-4.95s-0.84-3.74-2.05-4.95C4.24,786.34,2.36,785.5,0.5,785.5z M4.03,788.97 c0.96,0.96,1.46,2.08,1.46,3.53s-0.5,2.57-1.46,3.53c-0.96,0.96-2.08,1.46-3.53,1.46s-2.57-0.5-3.53-1.46s-1.46-2.08-1.46-3.53 s0.5-2.57,1.46-3.53s2.08-1.46,3.53-1.46S3.07,788.01,4.03,788.97z M-9.5,802.5c5-8,12-15,20-20C5.5,790.5-1.5,797.5-9.5,802.5 L-9.5,802.5z"></path></svg>`,

  // Alcance (Range)
  range: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cc-svg-icon"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/><line x1="12" y1="2" x2="12" y2="6" stroke="currentColor" stroke-width="2"/><line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" stroke-width="2"/><line x1="2" y1="12" x2="6" y2="12" stroke="currentColor" stroke-width="2"/><line x1="18" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="2.5" fill="currentColor"/></svg>`,

  // Dano Explosivo
  explosive: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cc-svg-icon"><path fill="currentColor" d="M12 2l2.4 5.6L20 8.5l-4 4.5 1 6-5-3-5 3 1-6-4-4.5 5.6-.9L12 2z"/></svg>`,

  // Dano Energético
  energy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cc-svg-icon"><path fill="currentColor" d="M13 2L3 14h8l-2 8 10-12h-8l2-8z"/></svg>`,

  // Queimadura (Burn)
  burn: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cc-svg-icon"><path fill="currentColor" d="M12 2c-1.5 3-4 5.5-4 9a6 6 0 0 0 12 0c0-3.5-2.5-6-4-9-1 2-2 3-4 0z"/></svg>`,

  // Calor (Heat)
  heat: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cc-svg-icon"><path fill="currentColor" d="M12 4a3 3 0 0 0-3 3v8a5 5 0 1 0 6 0V7a3 3 0 0 0-3-3zm0 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>`,

  // Divisor de Armas / Tecnologia (Divider Icon)
  divider: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 780.5 24 24" class="cc-svg-icon"><path fill="currentColor" d="M-9.5,783.5l6.36,2.13v2.83L8.5,800.09v1.41H7.09l-11.64-11.64h-2.83L-9.5,783.5z M10.5,783.5l-2.12,6.37H5.55l-2.35,2.34 l-1.41-1.41l2.34-2.34v-2.83L10.5,783.5z M-2.21,794.79l1.41,1.41l-5.29,5.29H-7.5v-1.41L-2.21,794.79z"></path></svg>`,

  // Compêndio / Livro (Header Right Icon)
  book: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 780.5 24 24" class="cc-svg-icon"><path fill="currentColor" d="M0.5,782.5l3.81,3.81l-3.81,3.81l-3.81-3.81L0.5,782.5z M8.12,790.12v6.67c-2.86,0.95-4.76,0-7.62,2.86 c-2.86-2.86-4.76-1.91-7.62-2.86v-6.67c2.86,0.95,4.77,0.02,7.62,2.86C3.36,790.12,5.26,791.07,8.12,790.12L8.12,790.12z M10.02,792.02v7.62l-7.62,1.9v0.95H-1.4v-0.95l-7.62-1.9v-7.62l0.95,0.24v6.43l7.62,1.9v0.71l0.95,0.24l0.95-0.24v-0.71l7.62-1.9 v-6.43L10.02,792.02z"></path></svg>`,

  // Ação / Ativação (Action Icon)
  action: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cc-svg-icon"><polygon points="12 2 21 7 21 17 12 22 3 17 3 7" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="currentColor"/></svg>`,

  // Sistema / SP (System Icon)
  system: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cc-svg-icon"><rect x="5" y="5" width="14" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><line x1="9" y1="1" x2="9" y2="5" stroke="currentColor" stroke-width="2"/><line x1="15" y1="1" x2="15" y2="5" stroke="currentColor" stroke-width="2"/><line x1="9" y1="19" x2="9" y2="23" stroke="currentColor" stroke-width="2"/><line x1="15" y1="19" x2="15" y2="23" stroke="currentColor" stroke-width="2"/><line x1="1" y1="9" x2="5" y2="9" stroke="currentColor" stroke-width="2"/><line x1="1" y1="15" x2="5" y2="15" stroke="currentColor" stroke-width="2"/><line x1="19" y1="9" x2="23" y2="9" stroke="currentColor" stroke-width="2"/><line x1="19" y1="15" x2="23" y2="15" stroke="currentColor" stroke-width="2"/></svg>`,

  // Status / Condição
  status: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="cc-svg-icon"><polygon points="12 2 22 20 2 20" fill="none" stroke="currentColor" stroke-width="2"/><line x1="12" y1="9" x2="12" y2="14" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="17" r="1" fill="currentColor"/></svg>`
};

if (typeof window !== 'undefined') {
  window.CC_ICONS = CC_ICONS;
}
