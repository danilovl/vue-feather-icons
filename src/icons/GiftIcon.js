const GiftIcon = {
    name: 'GiftIcon',
    props: {
        h: {
            type: Object,
            required: false
        },
        svg: {
            type: Object,
            required: false
        }
    },
    setup(props) {
        if (typeof h === 'undefined' && !props.h) {
            throw new TypeError('Vue h is not defined.')
        }

        const render = typeof h !== 'undefined' ? h : props.h

        const defaultSvg = {
            xmlns: 'http://www.w3.org/2000/svg',
            width: '24',
            height: '24',
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '2',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round'
        }
        const svg = {...defaultSvg, ...(props?.svg ?? {})}

        return function () {
            return render('svg', svg, [
                    render('polyline', {points: "20 12 20 22 4 22 4 12"}),
                    render('rect', {x: "2", y: "7", width: "20", height: "5"}),
                    render('line', {x1: "12", y1: "22", x2: "12", y2: "7"}),
                    render('path', {d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"}),
                    render('path', {d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"})
                ]
            )
        }
    }
}

export default GiftIcon
