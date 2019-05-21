import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FusePerfectScrollbarDirective } from '@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { CourseService } from '../academy/course.service';

@Component({
  selector: 'app-first-steps',
  templateUrl: './first-steps.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./first-steps.component.scss'],
  animations   : fuseAnimations
})
export class FirstStepsComponent implements OnInit, OnDestroy, AfterViewInit {

  animationDirection: 'left' | 'right' | 'none';
  course: any;
  courseStepContent: any;
  currentStep: number;

  @ViewChildren(FusePerfectScrollbarDirective)
  fuseScrollbarDirectives: QueryList<FusePerfectScrollbarDirective>;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {AcademyCourseService} _academyCourseService
   * @param {ChangeDetectorRef} _changeDetectorRef
   * @param {FuseSidebarService} _fuseSidebarService
   */
  constructor(
    private _academyCourseService: CourseService,
    private _changeDetectorRef: ChangeDetectorRef,
    private _fuseSidebarService: FuseSidebarService
  ) {
    // Set the defaults
    this.animationDirection = 'none';
    this.currentStep = 0;

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
    // Subscribe to courses
    this._academyCourseService.onCourseChanged
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe(course => {
            this.course = course;
        });
  }

  /**
   * After view init
   */
  ngAfterViewInit(): void
  {
    this.courseStepContent = this.fuseScrollbarDirectives.find((fuseScrollbarDirective) => {
        return fuseScrollbarDirective.elementRef.nativeElement.id === 'course-step-content';
    });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void
  {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Go to step
   *
   * @param step
   */
  gotoStep(step): void
  {
    // Decide the animation direction
    this.animationDirection = this.currentStep < step ? 'left' : 'right';

    // Run change detection so the change
    // in the animation direction registered
    this._changeDetectorRef.detectChanges();

    // Set the current step
    this.currentStep = step;
  }

  /**
   * Go to next step
   */
  gotoNextStep(): void
  {
    if ( this.currentStep === this.course.totalSteps - 1 )
    {
        return;
    }

    // Set the animation direction
    this.animationDirection = 'left';

    // Run change detection so the change
    // in the animation direction registered
    this._changeDetectorRef.detectChanges();

    // Increase the current step
    this.currentStep++;
  }

  /**
   * Go to previous step
   */
  gotoPreviousStep(): void
  {
    if ( this.currentStep === 0 )
    {
        return;
    }

    // Set the animation direction
    this.animationDirection = 'right';

    // Run change detection so the change
    // in the animation direction registered
    this._changeDetectorRef.detectChanges();

    // Decrease the current step
    this.currentStep--;
  }

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void
  {
    this._fuseSidebarService.getSidebar(name).toggleOpen();
  }

}
