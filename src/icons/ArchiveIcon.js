const ArchiveIcon = {
    name: 'ArchiveIcon',
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
                    render('polyline', {points: "21 8 21 21 3 21 3 8"}),
                    render('rect', {x: "1", y: "3", width: "22", height: "5"}),
                    render('line', {x1: "10", y1: "12", x2: "14", y2: "12"})
                ]
            )
        }
    }
}

export default ArchiveIcon
