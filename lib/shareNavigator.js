import { toast } from 'react-toastify';
import LocalStorage from './LocalStorage';

export default function shareWithNavigator({ url, title, text }) {
  try {
    if (navigator.share) {
      navigator.share({
        title,
        text,
        url
      });
    } else {
      if (document.queryCommandSupported('copy')) {
        const resolveUrl = new URL(url, window.location.href);
        const textarea = document.createElement('textarea');
        textarea.textContent = resolveUrl.href;
        document.body.append(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        toast.success('Link copied to clipboard');
      } else {
        toast.error('Your browser does not support this feature');
      }
      return false;
    }
    LocalStorage.set('navigatorShare', navigator);
  } catch (error) {
    const errors = LocalStorage.get('shareApiErrors') || [];
    errors.push(error?.stack || error?.message || error);
    LocalStorage.set('shareApiErrors', errors);
    return false;
  }
  return true;
}

export const shareVideoWithNavigator = ({ title, link,  performer }) => {
    let text = `
    Kepada Yth.
    Bapak/Ibu/Saudara/i
    <b>${title}</b>
  
    <b>Shalom, Salam Sejahtera dalam kasih,</b>
    Kami saling mencintai, karena Tuhan Yesus Kristus yang pertama kali mencintai kami,
    Tuhan membuat segala sesuatu indah pada waktunya, begitu indah saat Dia mempertemukan kami dan mempersatukan kami dalam ikatan Pernikahan Kudus.
    
    Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i .... untuk menghadiri acara kami.
    
    Berikut link undangan untuk info lengkap dari acara kami :
    ${url}
    
    link
    (mohon gunakan browser chrome untuk lebih maksimal)
    
    Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.
    
    Hormat Kami,
    Peter & Elisheba;
    `;
  
//   // eslint-disable-next-line eqeqeq
//   if (user && user?.id == authorId) {
//     text = `Cek abracadabra! Platform musik yang keren tempat musisi dan penyanyi berbakat bersaing untuk kesempatan tampil di konser wePOP. Pilih video musik favoritmu, menangkan tiket konser VIP, "meet n greet" berikut hotel dan tiket pesawat serta lainnya! Klik:
//     `;
//   } else {
//     // text = `Just find cool video on abracadabra Starquest. Vote ${title} by ${name} right now!`;
//     text = `Cek abracadabra! Platform musik yang keren tempat musisi dan penyanyi berbakat bersaing untuk kesempatan tampil di konser wePOP. Pilih video musik favoritmu, menangkan tiket konser VIP, "meet n greet" berikut hotel dan tiket pesawat serta lainnya! Klik:`;
//   }

  shareWithNavigator({
    text,
    url: link,
    title
  });
};



