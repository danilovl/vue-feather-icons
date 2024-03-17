const PenToolIcon = {
    name: 'PenToolIcon',
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
                    render('path', {d: "M12 19l7-7 3 3-7 7-3-3z"}),
                    render('path', {d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"}),
                    render('path', {d: "M2 2l7.586 7.586"}),
                    render('circle', {cx: "11", cy: "11", r: "2"})
                ]
            )
        }
    }
}

export default PenToolIcon
