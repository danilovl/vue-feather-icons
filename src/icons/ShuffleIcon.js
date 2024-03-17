const ShuffleIcon = {
    name: 'ShuffleIcon',
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
                    render('polyline', {points: "16 3 21 3 21 8"}),
                    render('line', {x1: "4", y1: "20", x2: "21", y2: "3"}),
                    render('polyline', {points: "21 16 21 21 16 21"}),
                    render('line', {x1: "15", y1: "15", x2: "21", y2: "21"}),
                    render('line', {x1: "4", y1: "4", x2: "9", y2: "9"})
                ]
            )
        }
    }
}

export default ShuffleIcon
