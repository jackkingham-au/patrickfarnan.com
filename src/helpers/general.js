// Youtube Video URL Sorter
export const srcUrl = (url, playerParams = '') => {
    let video;

    if(url.match(/&/)) {
        video = url.split(/&/)[0].split('?v=')[1];
    } else {
        video = url.split('?v=')[1];
    }

    return `https://www.youtube.com/embed/${video}?rel=0&playlist=${video}${playerParams}`;
}

const setCycle = service => {
    const cycles = service.paymentType.scheduling.endDateData.billingCycles;
    const frequency = service.paymentType.frequency;

    switch(frequency) {
        case 'Daily':
            return `After ${cycles} Days`;
        case 'Weekly':
            return `After ${cycles} Weeks`;
        case 'Monthly':
            return `After ${cycles} Months`;
        case 'Yearly':
            return `After ${cycles} Years`;
    }
}

// Calculate Subscription Times for Checkout
export const calculateTimes = (service) => {
    const start = service.paymentType.scheduling.startDateData.start;
    const end = service.paymentType.scheduling.endDateData.end;

    return {
        start: (start === 'Immediately') ? 'Today' : service.paymentType.scheduling.startDateData.startDate.split('-').reverse().join('/'), 
        end: (end === 'Ongoing') ? end : setCycle(service),
        freq: service.paymentType.frequency
    }
}