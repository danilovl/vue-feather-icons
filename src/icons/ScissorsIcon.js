const ScissorsIcon = {
    name: 'ScissorsIcon',
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
                    render('circle', {cx: "6", cy: "6", r: "3"}),
                    render('circle', {cx: "6", cy: "18", r: "3"}),
                    render('line', {x1: "20", y1: "4", x2: "8.12", y2: "15.88"}),
                    render('line', {x1: "14.47", y1: "14.48", x2: "20", y2: "20"}),
                    render('line', {x1: "8.12", y1: "8.12", x2: "12", y2: "12"})
                ]
            )
        }
    }
}

export default ScissorsIcon
