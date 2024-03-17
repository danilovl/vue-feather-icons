const MoveIcon = {
    name: 'MoveIcon',
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
                    render('polyline', {points: "5 9 2 12 5 15"}),
                    render('polyline', {points: "9 5 12 2 15 5"}),
                    render('polyline', {points: "15 19 12 22 9 19"}),
                    render('polyline', {points: "19 9 22 12 19 15"}),
                    render('line', {x1: "2", y1: "12", x2: "22", y2: "12"}),
                    render('line', {x1: "12", y1: "2", x2: "12", y2: "22"})
                ]
            )
        }
    }
}

export default MoveIcon
