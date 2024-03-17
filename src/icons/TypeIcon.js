const TypeIcon = {
    name: 'TypeIcon',
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
                    render('polyline', {points: "4 7 4 4 20 4 20 7"}),
                    render('line', {x1: "9", y1: "20", x2: "15", y2: "20"}),
                    render('line', {x1: "12", y1: "4", x2: "12", y2: "20"})
                ]
            )
        }
    }
}

export default TypeIcon
