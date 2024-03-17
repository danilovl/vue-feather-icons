const ZapOffIcon = {
    name: 'ZapOffIcon',
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
                    render('polyline', {points: "12.41 6.75 13 2 10.57 4.92"}),
                    render('polyline', {points: "18.57 12.91 21 10 15.66 10"}),
                    render('polyline', {points: "8 8 3 14 12 14 11 22 16 16"}),
                    render('line', {x1: "1", y1: "1", x2: "23", y2: "23"})
                ]
            )
        }
    }
}

export default ZapOffIcon
