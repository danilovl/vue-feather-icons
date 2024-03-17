const ZoomInIcon = {
    name: 'ZoomInIcon',
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
                    render('circle', {cx: "11", cy: "11", r: "8"}),
                    render('line', {x1: "21", y1: "21", x2: "16.65", y2: "16.65"}),
                    render('line', {x1: "11", y1: "8", x2: "11", y2: "14"}),
                    render('line', {x1: "8", y1: "11", x2: "14", y2: "11"})
                ]
            )
        }
    }
}

export default ZoomInIcon
