const TruckIcon = {
    name: 'TruckIcon',
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
                    render('rect', {x: "1", y: "3", width: "15", height: "13"}),
                    render('polygon', {points: "16 8 20 8 23 11 23 16 16 16 16 8"}),
                    render('circle', {cx: "5.5", cy: "18.5", r: "2.5"}),
                    render('circle', {cx: "18.5", cy: "18.5", r: "2.5"})
                ]
            )
        }
    }
}

export default TruckIcon
