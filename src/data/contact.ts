
const whatsappNumber = "5571992800827";
const whatsappMessage = "Opa paulo, vim do site e quero agendar uma sessão!";
const encodedMessage = encodeURIComponent(whatsappMessage);

export const contactConfig = {
    whatsapp: {
        number: whatsappNumber,
        display: "(71) 99280-0827",
        message: whatsappMessage,
        url: `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
        fullUrl: "https://api.whatsapp.com/send/?phone=5571992800827&text=Opa+paulo%2C+vim+do+site+e+quero+agendar+uma+sess%C3%A3o%21&type=phone_number&app_absent=0",
    },
    email: "treinamentospaulodias@gmail.com",
    location: "Salvador, BA",
    instagram: "https://instagram.com/eusoupaulodias",
    linkedin: "https://linkedin.com/in/paulodiastreinamentos",
    tastingUrl: "https://cisassessment.com.br/r/paulodias",
    tastingCtaLabel: "Obter Relatório Gratuito",
};
