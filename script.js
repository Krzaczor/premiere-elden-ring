const infoElement = document.querySelector('.info');
const timeElement = document.querySelector('.time');

const getTime = (time) => time.getTime();

const timePremiereEldenRing = getTime(new Date(2022, 1, 25));

const getInfoWhenIsPremiere = () => {
    const currentTime = getTime(new Date());
    const differenceTime = (timePremiereEldenRing - currentTime) / 1000;

    return {
        hourses: parseInt(differenceTime / (60 * 60)),
        minutes: parseInt((differenceTime / 60) % 60),
        seconds: parseInt(differenceTime % 60),
    }
}

const showTimeToPremiere = () => {
    const { hourses, minutes, seconds } = getInfoWhenIsPremiere();

    if (hourses <= 0 && minutes <= 0 && seconds <= 0) {
        infoElement.textContent = "Można już zagrać w Elden Ring!";
        timeElement.remove();
        return;
    }

    timeElement.textContent = `${hourses}godz ${minutes}min ${seconds}sek`;

    setTimeout(showTimeToPremiere, 1000);
}

showTimeToPremiere();