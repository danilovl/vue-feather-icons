const CodepenIcon = {
    name: 'CodepenIcon',
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
                    render('polygon', {points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}),
                    render('line', {x1: "12", y1: "22", x2: "12", y2: "15.5"}),
                    render('polyline', {points: "22 8.5 12 15.5 2 8.5"}),
                    render('polyline', {points: "2 15.5 12 8.5 22 15.5"}),
                    render('line', {x1: "12", y1: "2", x2: "12", y2: "8.5"})
                ]
            )
        }
    }
}

export default CodepenIcon
